import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public sublevel: String;

  //@ViewChild('home') home: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      this.updateSubLevel();
    });

    this.updateSubLevel();
  }

  updateSubLevel() {
    let path = window.location.pathname;
    if(path == "/personal-info")
      this.sublevel = "Personal Info";
    else if(path == "/financing-details")
      this.sublevel = "Financing Details";
    else if(path == "/property-info")
      this.sublevel = "Property Info";
    else if(path == "/loan-selection")
      this.sublevel = "Loan Selection";
    else if(path == "/loan-preferences")
      this.sublevel = "Loan Preferences";
    else if(path == "/asset-info")
      this.sublevel = "Asset Info";
    else if(path == "/expenses-info")
      this.sublevel = "Expenses Info";
    else if(path == "/income-info")
      this.sublevel = "Income Info";
    else if(path == "/smart-matches")
      this.sublevel = "Smart Matches";
    else
      this.sublevel = "Home";
  }

  navigateToHome() {
    this.router.navigate(['']);
    this.sublevel = "Home";
  }
  navigateToFinancingDetails() {
    this.router.navigate(['financing-details']);
    this.sublevel = "Financing Details"
  }
  navigateToPersonalInfo() {
    this.router.navigate(['personal-info']);
    this.sublevel = "Personal Info";
  }
  navigateToPropertyInfo() {
    this.router.navigate(['property-info']);
    this.sublevel = "Property Info";
  }
  navigateToLoanSelection() {
    this.router.navigate(['loan-selection']);
    this.sublevel = "Loan Selection";
  }
  navigateToLoanPreferences() {
    this.router.navigate(['loan-preferences']);
    this.sublevel = "Loan Preferences";
  }
  navigateToAssetInfo() {
    this.router.navigate(['asset-info']);
    this.sublevel = "Asset Info";
  }
  navigateToExpensesInfo() {
    this.router.navigate(['expenses-info']);
    this.sublevel = "Expenses Info";
  }
  navigateToIncomeInfo() {
    this.router.navigate(['income-info']);
    this.sublevel = "Income Info";
  }
}
