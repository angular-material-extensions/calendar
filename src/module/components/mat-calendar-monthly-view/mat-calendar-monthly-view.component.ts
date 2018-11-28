import {Component, OnInit} from '@angular/core';
import {NativeDateAdapter} from '@angular/material';

@Component({
  selector: 'mat-calendar-monthly-view',
  templateUrl: './mat-calendar-monthly-view.component.html',
  styleUrls: ['./mat-calendar-monthly-view.component.scss']
})
export class MatCalendarMonthlyViewComponent implements OnInit {

  /** The number of blank cells in the first row before the 1st of the month. */
  _firstWeekOffset: number;

  /** The date of the month that today falls on. Null if today is in another month. */
  _todayDate: number | null;

  /** The names of the weekdays. */
  _weekdays: { long: string, narrow: string }[];

  constructor(public nativeDateAdapter: NativeDateAdapter) {
  }

  ngOnInit() {
    const firstDayOfWeek = this.nativeDateAdapter.getFirstDayOfWeek();
    const narrowWeekdays = this.nativeDateAdapter.getDayOfWeekNames('narrow');
    const longWeekdays = this.nativeDateAdapter.getDayOfWeekNames('long');

    // console.log('getDayOfWeekNames', this.nativeDateAdapter.getDayOfWeekNames('short'));
    // Rotate the labels for days of the week based on the configured first day of the week.
    const weekdays = longWeekdays.map((long, i) => {
      return {long, narrow: narrowWeekdays[i]};
    });

    this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
    // this._todayDate = this._getDateInCurrentMonth(this.nativeDateAdapter.today());
  }

}
