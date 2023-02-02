import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSelectionComponent } from './loan-selection.component';

describe('LoanSelectionComponent', () => {
  let component: LoanSelectionComponent;
  let fixture: ComponentFixture<LoanSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
