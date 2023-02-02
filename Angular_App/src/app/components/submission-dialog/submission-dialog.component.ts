import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submission-dialog',
  templateUrl: './submission-dialog.component.html',
  styleUrls: ['./submission-dialog.component.scss']
})
export class SubmissionDialogComponent implements OnInit {

  constructor(
    public router: Router,
    public dialogRef: MatDialogRef<SubmissionDialogComponent>,
    //@Inject(MAT_DIALOG_DATA) public data: DialogData
    public matchesDialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  onNextClick(): void {
    this.matchesDialog.closeAll();
    this.router.navigate(['']);
  }

}
