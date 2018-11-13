import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatCalendarBody, MatCardModule, MatIconModule, NativeDateAdapter} from '@angular/material';

import {MatCalendarYearlyViewComponent} from './mat-calendar-yearly-view.component';
import {MatCalendarMonthPerYearViewComponent} from './mat-calendar-month-per-year-view/mat-calendar-month-per-year-view.component';
import {MatCalendarService} from '../../..';

describe('MatCalendarYearlyViewComponent', () => {
  let component: MatCalendarYearlyViewComponent;
  let fixture: ComponentFixture<MatCalendarYearlyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatIconModule],
      declarations:
        [
          MatCalendarBody,
          MatCalendarYearlyViewComponent,
          MatCalendarMonthPerYearViewComponent
        ],
      providers: [MatCalendarService, NativeDateAdapter]
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
