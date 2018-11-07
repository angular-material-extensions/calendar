import {Component, OnInit} from '@angular/core';
import * as _moment from 'moment';
import {NativeDateAdapter} from '@angular/material';

const moment = _moment;

@Component({
  selector: 'mat-calendar-month-pre-year-view',
  templateUrl: './mat-calendar-month-per-year-view.component.html',
  styleUrls: ['./mat-calendar-month-per-year-view.component.scss']
})
export class MatCalendarMonthPerYearViewComponent implements OnInit {

  /** The names of the weekdays. */
  _weekdays: { long: string, narrow: string }[];

  month: number;
  monthMatrix: [number, Array<number>] = [7, []];
  currentDate: Date = new Date();

  constructor(public nativeDateAdapter: NativeDateAdapter) {

    const firstDayOfWeek = this.nativeDateAdapter.getFirstDayOfWeek();
    const narrowWeekdays = this.nativeDateAdapter.getDayOfWeekNames('narrow');
    const longWeekdays = this.nativeDateAdapter.getDayOfWeekNames('long');

    console.log('getDayOfWeekNames', this.nativeDateAdapter.getDayOfWeekNames('short'));
    // Rotate the labels for days of the week based on the configured first day of the week.
    const weekdays = longWeekdays.map((long, i) => {
      return {long, narrow: narrowWeekdays[i]};
    });

    this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));

    console.log('this._weekdays = ', this._weekdays);
  }

  ngOnInit() {
    this.currentDate.setMonth(this.month);
    this.fillTheMonthMatrix();
  }

  fillTheMonthMatrix(): void {

    const start: any = moment().startOf('month');
    const end: any = moment().endOf('month');

    console.log('summary -> start is', start.toObject(), 'and the end is ', end.toObject());
    // console.log(`summary -> start is ${start.weekday()} and the end is ${end.weekday()}`);
    console.log(`summary -> start is ${start.toDate()} and the end is ${end.toDate()}`);

    // let clonedStartDate = start.clone();

    // while (clonedStartDate.date < end.date && clonedStartDate.months == end.months) {
    //   console.log('matrix = ', this.monthMatrix);
    //   // this.monthMatrix.push(2,)
    //   // this.monthMatrix[clonedStartDate.weekday()].push(clonedStartDate.date);
    //   console.log('clonedStartDate = ', clonedStartDate);
    //   clonedStartDate = clonedStartDate.add(1, 'day');
    // }
  }

}
