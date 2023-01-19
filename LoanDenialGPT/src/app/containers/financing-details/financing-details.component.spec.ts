import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingDetailsComponent } from './financing-details.component';

describe('FinancingDetailsComponent', () => {
  let component: FinancingDetailsComponent;
  let fixture: ComponentFixture<FinancingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
