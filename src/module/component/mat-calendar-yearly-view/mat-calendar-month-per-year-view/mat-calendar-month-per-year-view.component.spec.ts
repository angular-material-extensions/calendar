import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MatCardModule} from '@angular/material';
import {MatCalendarMonthPerYearViewComponent} from './mat-calendar-month-per-year-view.component';

describe('MatCalendarMonthPerYearViewComponent', () => {
  let component: MatCalendarMonthPerYearViewComponent;
  let fixture: ComponentFixture<MatCalendarMonthPerYearViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [MatCalendarMonthPerYearViewComponent, MatCalendarMonthPerYearViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCalendarMonthPerYearViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
