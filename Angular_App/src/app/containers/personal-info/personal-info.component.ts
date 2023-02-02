import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalInfo } from '../../models/personal-info';
import { MortgageApplicationService } from '../../services/mortgage-application.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  constructor(private router: Router, public applicationService: MortgageApplicationService) { }

  ngOnInit(): void {
  }

  navigateToPropertyInfo() {
    this.router.navigate(["property-info"]);
  }

  outputData() {
    console.log(this.applicationService.personalInfo.FirstName);
  }

}
