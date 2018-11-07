import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MatCalendarYearlyViewComponent} from './mat-calendar-yearly-view.component';
import {MatCalendarMonthPerYearViewComponent} from './mat-calendar-month-per-year-view/mat-calendar-month-per-year-view.component';
import {MatCardModule} from '@angular/material';

describe('MatCalendarYearlyViewComponent', () => {
  let component: MatCalendarYearlyViewComponent;
  let fixture: ComponentFixture<MatCalendarYearlyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [MatCalendarYearlyViewComponent, MatCalendarMonthPerYearViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCalendarYearlyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
