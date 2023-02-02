import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses-info',
  templateUrl: './expenses-info.component.html',
  styleUrls: ['./expenses-info.component.scss']
})
export class ExpensesInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToIncomeInfo() {
    this.router.navigate(["income-info"]);
  }

}
