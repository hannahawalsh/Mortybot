import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartMatchScrollComponent } from './smart-match-scroll.component';

describe('SmartMatchScrollComponent', () => {
  let component: SmartMatchScrollComponent;
  let fixture: ComponentFixture<SmartMatchScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartMatchScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartMatchScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
