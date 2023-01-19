import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isOpen = false;

  title = 'LoanDenialGPT';

  public matchesFound: any;
  public data$: any;
  public acquiredData: any;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
        document.body.classList.remove('nb-theme-default');
    });
}

  foundMatches(event) {
    console.log("received event");
    console.log(event);
    this.matchesFound = event;
    console.log(this.matchesFound[0]);
    this.data$ = this.dataService.getData(this.matchesFound[0]);
    console.log(this.data$);

    this.data$.subscribe(message => {
      //message[0].model.model_certainty *= 100;

      message[0].account.current_balance = message[0].account.current_balance.toFixed(2);
      message[0].activity.avg_transaction_amount = message[0].activity.avg_transaction_amount.toFixed(2);

      this.acquiredData = message;
      console.log(message);
    });
  }
}
