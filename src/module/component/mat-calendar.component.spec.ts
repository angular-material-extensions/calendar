import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {MatCalendarComponent} from './mat-calendar.component';
import {
  MatButtonModule, MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatRippleModule,
  MatToolbarModule
} from '@angular/material';
import {MatCalendarYearlyViewComponent} from './mat-calendar-yearly-view/mat-calendar-yearly-view.component';
import {MatCalendarMonthPerYearViewComponent} from './mat-calendar-yearly-view/mat-calendar-month-per-year-view/mat-calendar-month-per-year-view.component';

describe('MatCalendarComponent', function () {
  let de: DebugElement;
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
          MatCalendarComponent,
          MatCalendarYearlyViewComponent,
          MatCalendarMonthPerYearViewComponent
        ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCalendarComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p.description'));
  });

  it('should create component', () => expect(comp).toBeDefined());

});
