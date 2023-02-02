import { Injectable } from '@angular/core';
import { PersonalInfo } from '../models/personal-info';
import { IncomeInfo } from '../models/income-info';

@Injectable({
  providedIn: 'root'
})
export class MortgageApplicationService {

  constructor() { 
    this.personalInfo = new PersonalInfo();
    this.incomeInfo = new IncomeInfo();
  }

  public personalInfo: PersonalInfo;
  public incomeInfo: IncomeInfo;

}
