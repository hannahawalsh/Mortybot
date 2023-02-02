import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPreferencesComponent } from './loan-preferences.component';

describe('LoanPreferencesComponent', () => {
  let component: LoanPreferencesComponent;
  let fixture: ComponentFixture<LoanPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
