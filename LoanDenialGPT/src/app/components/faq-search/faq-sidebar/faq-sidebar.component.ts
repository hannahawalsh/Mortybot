import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FaqService } from '../../../services/faq-service.service';

@Component({
  selector: 'app-faq-sidebar',
  templateUrl: './faq-sidebar.component.html',
  styleUrls: ['./faq-sidebar.component.scss']
})
export class FaqSidebarComponent implements OnInit {

  public predictions$: any;
  public predictions: any;

  public questionAsked: boolean = false;

  @Input() userInput: String;

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
  }

  getPredictions(input): void {
    this.predictions = null;
    this.questionAsked = true;
    console.log("GET PREDICTIONS");
    console.log(input);

    this.predictions$ = this.faqService.getPredictions(input);
    this.predictions$.subscribe(message => {
      this.predictions = message;
      console.log(this.predictions);
      this.questionAsked = false;
    });
  }

  convertScore(score) {
    return Math.round(score * 100);
    //let rounded = score.toFixed(2);
    //return rounded * 100;
  }
}
