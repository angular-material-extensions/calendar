import {Component, Inject, Input, OnChanges, OnInit, Optional, SimpleChanges, ViewEncapsulation} from '@angular/core';
import * as _moment from 'moment';
import {MAT_DATE_FORMATS, MatCalendarCell, MatDateFormats, NativeDateAdapter} from '@angular/material';

const moment = _moment;

@Component({
  selector: 'mat-calendar-month-pre-year-view',
  templateUrl: './mat-calendar-month-per-year-view.component.html',
  styleUrls: ['./mat-calendar-month-per-year-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MatCalendarMonthPerYearViewComponent implements OnInit, OnChanges {

  @Input()
  month: number;

  @Input()
  year: number;

  private _activeDate: Date;

  /** The number of blank cells in the first row before the 1st of the month. */
  _firstWeekOffset: number;

  /** The date of the month that today falls on. Null if today is in another month. */
  _todayDate: number | null;

  /** The names of the weekdays. */
  _weekdays: { long: string, narrow: string }[];

  /** Grid of calendar cells representing the dates of the month. */
  _weeks: MatCalendarCell[][];

  monthMatrix: [number, Array<number>] = [7, []];

  selectedDate: Date = new Date();

  constructor(@Optional() @Inject(MAT_DATE_FORMATS)
              private _dateFormats: MatDateFormats,
              public nativeDateAdapter: NativeDateAdapter) {

    const firstDayOfWeek = this.nativeDateAdapter.getFirstDayOfWeek();
    const narrowWeekdays = this.nativeDateAdapter.getDayOfWeekNames('narrow');
    const longWeekdays = this.nativeDateAdapter.getDayOfWeekNames('long');

    // console.log('getDayOfWeekNames', this.nativeDateAdapter.getDayOfWeekNames('short'));
    // Rotate the labels for days of the week based on the configured first day of the week.
    const weekdays = longWeekdays.map((long, i) => {
      return {long, narrow: narrowWeekdays[i]};
    });

    this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
    this._todayDate = this._getDateInCurrentMonth(this.nativeDateAdapter.today());

    // console.log('this._weekdays = ', this._weekdays);
  }

  ngOnInit() {
    this.selectedDate.setMonth(this.month);
    this.selectedDate.setFullYear(this.year);
    this.init();
    console.log('on init: ', this.selectedDate);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.year) {
      this.year = changes.year.currentValue;
    }
  }

  init() {
    this._todayDate = this._getDateInCurrentMonth(this.nativeDateAdapter.today());
    const firstOfMonth = this.nativeDateAdapter.createDate(this.nativeDateAdapter.getYear(this.selectedDate),
      this.nativeDateAdapter.getMonth(this.selectedDate), 1);
    this._firstWeekOffset =
      (7 + this.nativeDateAdapter.getDayOfWeek(firstOfMonth) -
        this.nativeDateAdapter.getFirstDayOfWeek()) % 7;
    this._createWeekCells();
    // console.log(this._weeks);
  }

  /**
   * Gets the date in this month that the given Date falls on.
   * Returns null if the given Date is in another month.
   */
  private _getDateInCurrentMonth(date: Date | null): number | null {
    return date && this._hasSameMonthAndYear(date, this.selectedDate) ?
      this.nativeDateAdapter.getDate(date) : null;
  }

  /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
  private _hasSameMonthAndYear(d1: Date | null, d2: Date | null): boolean {
    return !!(d1 && d2 && this.nativeDateAdapter.getMonth(d1) === this.nativeDateAdapter.getMonth(d2) &&
      this.nativeDateAdapter.getYear(d1) === this.nativeDateAdapter.getYear(d2));
  }

  /** Creates MatCalendarCells for the dates in this month. */
  private _createWeekCells() {
    const daysInMonth = this.nativeDateAdapter.getNumDaysInMonth(this.selectedDate);
    const dateNames = this.nativeDateAdapter.getDateNames();
    this._weeks = [[]];
    for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
      if (cell === 7) {
        this._weeks.push([]);
        cell = 0;
      }
      const date = this.nativeDateAdapter.createDate(
        this.nativeDateAdapter.getYear(this.selectedDate),
        this.nativeDateAdapter.getMonth(this.selectedDate), i + 1);
      // const enabled = this._shouldEnableDate(date);
      // const ariaLabel = this.nativeDateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
      this._weeks[this._weeks.length - 1]
        .push(new MatCalendarCell(i + 1, dateNames[i], 'ariaLabel', false));
    }
  }
}
