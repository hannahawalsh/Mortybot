import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SmartMatchScrollComponent } from '../../containers/smart-match-scroll/smart-match-scroll.component';
import { DocumentAIService } from '../../services/document-ai.service';
import { MortgageApplicationService } from '../../services/mortgage-application.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-income-info',
  templateUrl: './income-info.component.html',
  styleUrls: ['./income-info.component.scss']
})
export class IncomeInfoComponent implements OnInit {


  constructor(public rejectDialog: MatDialog, public matchesDialog: MatDialog, public documentAIDialog: MatDialog, private documentAIService: DocumentAIService, public applicationService: MortgageApplicationService) { }

  ngOnInit(): void {

    // THIS FORCES SMART MATCH CAROUSEL TO OPEN IMMEDIATELY
    // const dialogRef = this.matchesDialog.open(MatchesDialog, {
    //   width: '600px',
    // });
  }

  submit() {
    const dialogRef = this.rejectDialog.open(RejectDialog, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public inputFile: File;
  public fileData;

  onFileChange(evt): void {
    this.fileData = null;
    this.inputFile = evt.target.files[0];
    console.log(this.inputFile);
    this.documentAIService.getBase64(this.inputFile).then((result) => {
      this.fileData = result;
      console.log(this.fileData);
    });
  }

  public predictions$: any;

  uploadDocument() {
    this.predictions$ = this.documentAIService.getPredictions(this.fileData);
    const dialogRef = this.documentAIDialog.open(DocumentAIDialog, {
      width: '1000px',
      data: {
        predictions$: this.predictions$
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'reject-dialog',
  templateUrl: 'reject-dialog.html',
})
export class RejectDialog {

  constructor(
    public dialogRef: MatDialogRef<RejectDialog>,
    //@Inject(MAT_DIALOG_DATA) public data: DialogData
    public tandcDialog: MatDialog
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close();

    const dialogRef = this.tandcDialog.open(TandcDialog, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'tandc-dialog',
  templateUrl: 'tandc-dialog.html',
})
export class TandcDialog {

  constructor(
    public router: Router,
    public dialogRef: MatDialogRef<TandcDialog>,
    //@Inject(MAT_DIALOG_DATA) public data: DialogData
    public matchesDialog: MatDialog,
  ) { }

  onNextClick(): void {
    this.dialogRef.close();

    const dialogRef = this.matchesDialog.open(MatchesDialog, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'matches-dialog',
  templateUrl: 'matches-dialog.html',
})
export class MatchesDialog {
  constructor(
    public router: Router,
    public dialogRef: MatDialogRef<MatchesDialog>,
    //@Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onShowAllClick(): void {
    this.dialogRef.close();
    this.router.navigate(["smart-matches"]);
  }
}



@Component({
  selector: 'document-ai-dialog',
  templateUrl: 'document-ai-dialog.html',
})
export class DocumentAIDialog {
  constructor(
    public router: Router,
    public dialogRef: MatDialogRef<DocumentAIDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public mortgageApplicationService: MortgageApplicationService
  ) { }

  public dataLoaded: Boolean = false;
  public predictions: any;

  public tableData: any[];
  public dataSource;
  displayedColumns: string[] = ['FieldName', 'UserValue', 'SuggestedValue', 'Actions'];


  ngOnInit() {
    this.tableData = [
      {
        FieldName: "Name",
        UserValue:
          (!!this.mortgageApplicationService.personalInfo.FirstName ? this.mortgageApplicationService.personalInfo.FirstName : "")
          + (!!this.mortgageApplicationService.personalInfo.MiddleName ? " " + this.mortgageApplicationService.personalInfo.MiddleName : "")
          + (!!this.mortgageApplicationService.personalInfo.LastName ? " " + this.mortgageApplicationService.personalInfo.LastName : ""),
        SuggestedValue: null
      },
      {
        FieldName: "Address",
        UserValue: this.mortgageApplicationService.personalInfo.Address,
        SuggestedValue: null
      },
      {
        FieldName: "Social Security Number",
        UserValue: this.mortgageApplicationService.personalInfo.SSN,
        SuggestedValue: null
      },
      {
        FieldName: "Employer Name and Address",
        UserValue: this.mortgageApplicationService.incomeInfo.EmployerNameAndAddress,
        SuggestedValue: null
      },
      {
        FieldName: "EIN",
        UserValue: this.mortgageApplicationService.incomeInfo.EIN,
        SuggestedValue: null
      },
      {
        FieldName: "Wages",
        UserValue: this.mortgageApplicationService.incomeInfo.Wages,
        SuggestedValue: null
      },
      {
        FieldName: "Federal Income Tax",
        UserValue: this.mortgageApplicationService.incomeInfo.FederalIncomeTax,
        SuggestedValue: null
      },
      {
        FieldName: "Medicare Wages",
        UserValue: this.mortgageApplicationService.incomeInfo.MedicareWages,
        SuggestedValue: null
      },
      {
        FieldName: "Social Security Tax",
        UserValue: this.mortgageApplicationService.incomeInfo.SSTax,
        SuggestedValue: null
      },
      {
        FieldName: "Social Security Wages",
        UserValue: this.mortgageApplicationService.incomeInfo.SSWages,
        SuggestedValue: null
      },
      {
        FieldName: "Medicare Tax",
        UserValue: this.mortgageApplicationService.incomeInfo.MedicareTax,
        SuggestedValue: null
      },
      {
        FieldName: "Control Number",
        UserValue: this.mortgageApplicationService.incomeInfo.ControlNumber,
        SuggestedValue: null
      },
    ];

    this.dataSource = new MatTableDataSource(this.tableData); //data


    this.data.predictions$.subscribe(message => {
      this.predictions = message;
      this.dataLoaded = true;
      console.log(this.predictions);

      let entities = this.predictions.entities;

      let tdata = this.tableData.filter(item => item['FieldName'] == "Name");
      let entity = entities.filter(item => item['name'] == "EmployeeName");
      tdata[0]['SuggestedValue'] = entity[0]['value'];

      tdata = this.tableData.filter(item => item['FieldName'] == "Address");
      entity = entities.filter(item => item['name'] == "EmployeeAddress");
      tdata[0]['SuggestedValue'] = entity[0]['value'];

      tdata = this.tableData.filter(item => item['FieldName'] == "Social Security Number");
      entity = entities.filter(item => item['name'] == "SSN");
      tdata[0]['SuggestedValue'] = entity[0]['value'];

      tdata = this.tableData.filter(item => item['FieldName'] == "EIN");
      entity = entities.filter(item => item['name'] == "EIN");
      tdata[0]['SuggestedValue'] = entity[0]['value'];

      tdata = this.tableData.filter(item => item['FieldName'] == "Employer Name and Address");
      console.log(tdata);
      entity = entities.filter(item => item['name'] == "EmployerNameAndAddress");
      tdata[0]['SuggestedValue'] = entity[0]['value'];

      tdata = this.tableData.filter(item => item['FieldName'] == "Wages");
      entity = entities.filter(item => item['name'] == "WagesTipsOtherCompensation");
      tdata[0]['SuggestedValue'] = entity[0]['value'];

      tdata = this.tableData.filter(item => item['FieldName'] == "Federal Income Tax");
      entity = entities.filter(item => item['name'] == "FederalIncomeTaxWithheld");
      tdata[0]['SuggestedValue'] = entity[0]['value'];

      tdata = this.tableData.filter(item => item['FieldName'] == "Medicare Wages");
      entity = entities.filter(item => item['name'] == "MedicareWagesAndTips");
      tdata[0]['SuggestedValue'] = entity[0]['value'];

      tdata = this.tableData.filter(item => item['FieldName'] == "Social Security Tax");
      entity = entities.filter(item => item['name'] == "SocialSecurityTaxWithheld");
      tdata[0]['SuggestedValue'] = entity[0]['value'];

      tdata = this.tableData.filter(item => item['FieldName'] == "Social Security Wages");
      entity = entities.filter(item => item['name'] == "SocialSecurityWages");
      tdata[0]['SuggestedValue'] = entity[0]['value'];

      tdata = this.tableData.filter(item => item['FieldName'] == "Medicare Tax");
      entity = entities.filter(item => item['name'] == "MedicareTaxWithheld");
      tdata[0]['SuggestedValue'] = entity[0]['value'];

      tdata = this.tableData.filter(item => item['FieldName'] == "Control Number");
      entity = entities.filter(item => item['name'] == "ControlNumber");
      tdata[0]['SuggestedValue'] = entity[0]['value'];

      console.log(this.tableData);
      this.dataSource = new MatTableDataSource(this.tableData); //data
    });
  }

  useSuggestion(element) {
    let tdata = this.tableData.filter(item => item['FieldName'] == element['FieldName']);
    tdata[0]['UserValue'] = tdata[0]['SuggestedValue'];
    this.dataSource = new MatTableDataSource(this.tableData); //data

    switch (element['FieldName']) {
      case 'Name':
        //this.mortgageApplicationService.personalInfo.
        let names = element['SuggestedValue'].split(" ");
        switch (names.length) {
          case 1:
            this.mortgageApplicationService.personalInfo.FirstName = element['SuggestedValue'];
            break;
          case 2:
            this.mortgageApplicationService.personalInfo.FirstName = names[0];
            this.mortgageApplicationService.personalInfo.LastName = names[1];
            break;
          case 3:
            this.mortgageApplicationService.personalInfo.FirstName = names[0];
            this.mortgageApplicationService.personalInfo.MiddleName = names[1];
            this.mortgageApplicationService.personalInfo.LastName = names[2];
            break;
          case 4:
            this.mortgageApplicationService.personalInfo.FirstName = names[0] + " " + names[1];
            this.mortgageApplicationService.personalInfo.MiddleName = names[2];
            this.mortgageApplicationService.personalInfo.LastName = names[3];
            break;
        }
        break;
      case 'Address':
        this.mortgageApplicationService.personalInfo.Address = element['SuggestedValue'];
        break;
      case 'Social Security Number':
        this.mortgageApplicationService.personalInfo.SSN = element['SuggestedValue'];
        break;
      case 'EIN':
        this.mortgageApplicationService.incomeInfo.EIN = element['SuggestedValue'];
        break;
      case 'Employer Name and Address':
        this.mortgageApplicationService.incomeInfo.EmployerNameAndAddress= element['SuggestedValue'];
        break;
      case 'Wages':
        this.mortgageApplicationService.incomeInfo.Wages = element['SuggestedValue'];
        break;
      case 'Federal Income Tax':
        this.mortgageApplicationService.incomeInfo.FederalIncomeTax = element['SuggestedValue'];
        break;
      case 'Medicare Wages':
        this.mortgageApplicationService.incomeInfo.MedicareWages = element['SuggestedValue'];
        break;
      case 'Social Security Tax':
        this.mortgageApplicationService.incomeInfo.SSTax = element['SuggestedValue'];
        break;
      case 'Social Security Wages':
        this.mortgageApplicationService.incomeInfo.SSWages = element['SuggestedValue'];
        break;
      case 'Medicare Tax':
        this.mortgageApplicationService.incomeInfo.MedicareTax = element['SuggestedValue'];
        break;
      case 'Control Number':
        this.mortgageApplicationService.incomeInfo.ControlNumber = element['SuggestedValue'];
        break;
    }
  }
}
