import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../../services/faq-service.service';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent implements OnInit {

  public predictions$: any;
  public predictions: any;

  public questionAsked: boolean = false;

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

}
