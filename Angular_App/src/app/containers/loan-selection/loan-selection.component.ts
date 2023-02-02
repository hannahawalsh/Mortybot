import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { timer, of, Observable, Subject } from 'rxjs';
import { switchMap, takeUntil, catchError } from 'rxjs/operators';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-selection',
  templateUrl: './loan-selection.component.html',
  styleUrls: ['./loan-selection.component.scss']
})
export class LoanSelectionComponent implements OnInit {

  public data$: Observable<Object>;
  public dataSource: MatTableDataSource<any>;
  public dataSource2: MatTableDataSource<any>;


  public data = [
    {"Rate" : "2.500%", "APR": "2.860%", "Points":"1.000%", "Closing Fees":"$4,553.50", "Payment": "$942.70"},
    {"Rate" : "2.750%", "APR": "3.005%", "Points":"0.500%", "Closing Fees":"$4,053.50", "Payment": "$954.11"},
    {"Rate" : "2.875%", "APR": "3.078%", "Points":"0.250%", "Closing Fees":"$3,803.50", "Payment": "$959.85"},
    {"Rate" : "3.000%", "APR": "3.150%", "Points":"0.000%", "Closing Fees":"$3,553.50", "Payment": "$965.61"},
    {"Rate" : "3.125%", "APR": "3.276%", "Points":"0.000%", "Closing Fees":"$3,303.50", "Payment": "$971.39"},
    {"Rate" : "3.250%", "APR": "3.401%", "Points":"0.000%", "Closing Fees":"$2,553.50", "Payment": "$988.86"},
  ];

  public data2 = [
    {"Rate" : "2.500%", "APR": "3.451%", "Points":"1.000%", "Closing Fees":"$4,579.00", "Payment": "$395.12"},
    {"Rate" : "2.750%", "APR": "3.498%", "Points":"0.500%", "Closing Fees":"$4,079.50", "Payment": "$408.24"},
    {"Rate" : "2.875%", "APR": "3.521%", "Points":"0.250%", "Closing Fees":"$3,829.50", "Payment": "$414.89"},
    {"Rate" : "3.000%", "APR": "3.544%", "Points":"0.000%", "Closing Fees":"$3,579.50", "Payment": "$421.60"},
    {"Rate" : "3.125%", "APR": "3.588%", "Points":"0.000%", "Closing Fees":"$3,329.50", "Payment": "$428.38"},
    {"Rate" : "3.250%", "APR": "3.632%", "Points":"0.000%", "Closing Fees":"$3,079.50", "Payment": "$435.21"},
  ];


  displayedColumns: string[] = [
    "Rate",
    "APR",
    "Points",
    "Closing Fees",
    "Payment",
    "Buttons"
  ];



  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private router: Router) { }

  ngOnInit(): void {
          this.dataSource = new MatTableDataSource(this.data); //data
          this.dataSource2 = new MatTableDataSource(this.data2);
          this.dataSource.sort = this.sort;
  }

  navigateToAssetInfo() {
    this.router.navigate(["asset-info"]);
  }

}
