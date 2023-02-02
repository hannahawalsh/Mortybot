import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('1000ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() slides;

  public flipped: boolean;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {

  }

  currentSlide = 0;

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}
