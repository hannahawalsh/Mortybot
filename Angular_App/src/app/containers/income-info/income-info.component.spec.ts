import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeInfoComponent } from './income-info.component';

describe('IncomeInfoComponent', () => {
  let component: IncomeInfoComponent;
  let fixture: ComponentFixture<IncomeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
