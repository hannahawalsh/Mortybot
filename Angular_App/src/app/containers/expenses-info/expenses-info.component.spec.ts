import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesInfoComponent } from './expenses-info.component';

describe('ExpensesInfoComponent', () => {
  let component: ExpensesInfoComponent;
  let fixture: ComponentFixture<ExpensesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
