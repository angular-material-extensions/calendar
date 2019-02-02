import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatCalendarBody,
  MatCardModule,
  MatDateFormats,
  MatNativeDateModule,
  NativeDateAdapter
} from '@angular/material';
import {MatCalendarMonthPerYearViewComponent} from './mat-calendar-month-per-year-view.component';
import {MatCalendarService} from '../../../..';
import {LOCALE_ID} from '@angular/core';

describe('MatCalendarMonthPerYearViewComponent', () => {
  let component: MatCalendarMonthPerYearViewComponent;
  let fixture: ComponentFixture<MatCalendarMonthPerYearViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:
        [
          MatCardModule,
          MatNativeDateModule
        ],
      declarations:
        [
          MatCalendarBody,
          MatCalendarMonthPerYearViewComponent
        ],
      providers:
        [
          MatCalendarService,
          NativeDateAdapter,
          {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
          {provide: LOCALE_ID, useValue: 'en-GB'},
          {provide: MAT_DATE_FORMATS, useValue: {
              parse: {
                dateInput: 'D/MM/YYYY'
              },
              display: {
                dateInput: 'DD/MM/YYYY',
                monthYearLabel: 'MMMM Y',
                dateA11yLabel: 'LL',
                monthYearA11yLabel: 'MMMM Y'
              }
            }},
        ]
    }).compileComponents();
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
