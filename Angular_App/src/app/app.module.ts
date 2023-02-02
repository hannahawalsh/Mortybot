import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModules } from './material-modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PersonalInfoComponent } from './containers/personal-info/personal-info.component';
import { PropertyInfoComponent } from './containers/property-info/property-info.component';
import { LoanSelectionComponent } from './containers/loan-selection/loan-selection.component';
import { AssetInfoComponent } from './containers/asset-info/asset-info.component';
import { ExpensesInfoComponent } from './containers/expenses-info/expenses-info.component';
import { IncomeInfoComponent, RejectDialog, TandcDialog, MatchesDialog, DocumentAIDialog} from './containers/income-info/income-info.component';
import { StartAppComponent } from './containers/start-app/start-app.component';
import { LoanPreferencesComponent } from './containers/loan-preferences/loan-preferences.component';
import { SmartMatchesComponent, FiDialog } from './containers/smart-matches/smart-matches.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SmartMatchScrollComponent } from './containers/smart-match-scroll/smart-match-scroll.component';
import { SubmissionDialogComponent } from './components/submission-dialog/submission-dialog.component';
import { InputDialogComponent } from './components/faq-search/input-dialog/input-dialog.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FaqSidebarComponent } from './components/faq-search/faq-sidebar/faq-sidebar.component';
import { FinancingDetailsComponent } from './containers/financing-details/financing-details.component';
import { ChatComponent } from './components/chat/chat.component';
import { NbThemeModule, NbLayoutModule, NbChatModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    HomePageComponent,
    AppContentComponent,
    PersonalInfoComponent,
    PropertyInfoComponent,
    LoanSelectionComponent,
    AssetInfoComponent,
    ExpensesInfoComponent,
    IncomeInfoComponent,
    RejectDialog,
    TandcDialog,
    DocumentAIDialog,
    StartAppComponent,
    LoanPreferencesComponent,
    SmartMatchesComponent,
    FiDialog,
    MatchesDialog,
    SmartMatchScrollComponent,
    CarouselComponent,
    SubmissionDialogComponent,
    InputDialogComponent,
    FaqSidebarComponent,
    FinancingDetailsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
    FormsModule,
    NgbModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbChatModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
