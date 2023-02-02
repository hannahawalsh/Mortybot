import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  isOpen = false;

  showQuestionField = false;

  @Input() sublevel: String;
  @ViewChild('question') question: ElementRef;
  
  constructor(public searchDialog: MatDialog,) { }

  ngOnInit() {
  }

  @Output() menuClick = new EventEmitter<boolean>();

  toggleNav() {
    this.menuClick.emit(true);
  }
}
