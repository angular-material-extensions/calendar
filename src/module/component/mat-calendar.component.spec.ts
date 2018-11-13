import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {MatCalendarComponent} from './mat-calendar.component';
import {
  MAT_DATE_FORMATS,
  MatButtonModule, MatCalendarBody, MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatRippleModule,
  MatToolbarModule,
  NativeDateAdapter
} from '@angular/material';
import {MatCalendarYearlyViewComponent} from './mat-calendar-yearly-view/mat-calendar-yearly-view.component';
import {MatCalendarMonthPerYearViewComponent}
  from './mat-calendar-yearly-view/mat-calendar-month-per-year-view/mat-calendar-month-per-year-view.component';
import {MatCalendarService} from '../..';


describe('MatCalendarComponent', function () {
  let comp: MatCalendarComponent;
  let fixture: ComponentFixture<MatCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:
        [
          MatToolbarModule,
          MatMenuModule,
          MatCardModule,
          MatDividerModule,
          MatDialogModule,
          MatButtonModule,
          MatIconModule,
          MatRippleModule
        ],
      declarations:
        [
          MatCalendarBody,
          MatCalendarComponent,
          MatCalendarYearlyViewComponent,
          MatCalendarMonthPerYearViewComponent
        ],
      providers: [
        MatCalendarService,
        NativeDateAdapter,
        {
          provide: MAT_DATE_FORMATS, useValue: {
            parse: {
              dateInput: 'D/MM/YYYY'
            },
            display: {
              dateInput: 'DD/MM/YYYY',
              monthYearLabel: 'MMMM Y',
              dateA11yLabel: 'LL',
              monthYearA11yLabel: 'MMMM Y'
            }
          }
        },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCalendarComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => expect(comp).toBeDefined());

});
