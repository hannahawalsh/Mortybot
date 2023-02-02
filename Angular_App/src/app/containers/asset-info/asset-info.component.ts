import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asset-info',
  templateUrl: './asset-info.component.html',
  styleUrls: ['./asset-info.component.scss']
})
export class AssetInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToExpensesInfo() {
    this.router.navigate(["expenses-info"]);
  }
}
