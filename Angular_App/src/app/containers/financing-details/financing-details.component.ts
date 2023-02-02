import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financing-details',
  templateUrl: './financing-details.component.html',
  styleUrls: ['./financing-details.component.scss']
})
export class FinancingDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPersonalInfo() {
    this.router.navigate(["personal-info"]);
  }

}
