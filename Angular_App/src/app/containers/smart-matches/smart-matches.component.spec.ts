import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartMatchesComponent } from './smart-matches.component';

describe('SmartMatchesComponent', () => {
  let component: SmartMatchesComponent;
  let fixture: ComponentFixture<SmartMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
