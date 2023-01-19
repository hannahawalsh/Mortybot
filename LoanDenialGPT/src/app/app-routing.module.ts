import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent} from './containers/home-page/home-page.component';
import {PersonalInfoComponent} from './containers/personal-info/personal-info.component';
import {PropertyInfoComponent} from './containers/property-info/property-info.component';
import {LoanSelectionComponent} from './containers/loan-selection/loan-selection.component';
import {LoanPreferencesComponent} from './containers/loan-preferences/loan-preferences.component';
import {AssetInfoComponent} from './containers/asset-info/asset-info.component';
import {ExpensesInfoComponent} from './containers/expenses-info/expenses-info.component';
import {IncomeInfoComponent} from './containers/income-info/income-info.component';
import {SmartMatchesComponent} from './containers/smart-matches/smart-matches.component';
import {FinancingDetailsComponent } from './containers/financing-details/financing-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
    data: {
      viewId: 'home'
    }
  },
  {
    path: 'financing-details',
    pathMatch: 'full',
    component: FinancingDetailsComponent,
    data: {
      viewId: 'financing-details'
    }
  },
  {
    path: 'personal-info',
    pathMatch: 'full',
    component: PersonalInfoComponent,
    data: {
      viewId: 'personal-info'
    }
  },
  {
    path: 'property-info',
    pathMatch: 'full',
    component: PropertyInfoComponent,
    data: {
      viewId: 'property-info'
    }
  },
  {
    path: 'loan-selection',
    pathMatch: 'full',
    component: LoanSelectionComponent,
    data: {
      viewId: 'loan-selection'
    }
  },
  {
    path: 'loan-preferences',
    pathMatch: 'full',
    component: LoanPreferencesComponent,
    data: {
      viewId: 'loan-preferences'
    }
  },
  {
    path: 'asset-info',
    pathMatch: 'full',
    component: AssetInfoComponent,
    data: {
      viewId: 'asset-info'
    }
  },
  {
    path: 'expenses-info',
    pathMatch: 'full',
    component: ExpensesInfoComponent,
    data: {
      viewId: 'expenses-info'
    }
  },
  {
    path: 'income-info',
    pathMatch: 'full',
    component: IncomeInfoComponent,
    data: {
      viewId: 'income-info'
    }
  },
  {
    path: 'smart-matches',
    pathMatch: 'full',
    component: SmartMatchesComponent,
    data: {
      viewId: 'smart-matches'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
