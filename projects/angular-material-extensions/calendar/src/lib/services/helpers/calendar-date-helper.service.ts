import {Injectable} from '@angular/core';
import {NativeDateAdapter} from '@angular/material/core';
import {MatCalendarCell} from '@angular/material/datepicker';

const DAYS_PER_WEEK = 7;

@Injectable({
    providedIn: 'root'
})
export class CalendarDateHelper {

    /** The number of blank cells in the first row before the 1st of the month. */
    firstWeekOffset: number;

    /**
     * The date to display in this month view (everything other than the month and year is ignored).
     */
    activeDate: Date = new Date();

    /** Grid of calendar cells representing the dates of the month. */
    weeks: MatCalendarCell[][];

    constructor(public _nativeDateAdapter: NativeDateAdapter) {
        this.init();
    }

    init(): void {
        this.firstWeekOffset = this.getFirstWeekOffset();
    }

    getFirstOfMonth(): Date {
        return this._nativeDateAdapter.createDate(this._nativeDateAdapter.getYear(this.activeDate),
            this._nativeDateAdapter.getMonth(this.activeDate), 1);
    }

    getFirstWeekOffset(date: Date = this.getFirstOfMonth()): number {
        return (DAYS_PER_WEEK + this._nativeDateAdapter.getDayOfWeek(date) -
            this._nativeDateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
    }

    /** Creates MatCalendarCells for the dates in this month. */
    createWeekCells(): MatCalendarCell[][] {
        const daysInMonth = this._nativeDateAdapter.getNumDaysInMonth(this.activeDate);
        const dateNames = this._nativeDateAdapter.getDateNames();
        this.weeks = [[]];
        for (let i = 0, cell = this.firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell === DAYS_PER_WEEK) {
                this.weeks.push([]);
                cell = 0;
            }
            // const date = this._nativeDateAdapter.createDate(
            //   this._nativeDateAdapter.getYear(this.activeDate),
            //   this._nativeDateAdapter.getMonth(this.activeDate), i + 1);
            // const ariaLabel = this._nativeDateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
            this.weeks[this.weeks.length - 1]
                .push(new MatCalendarCell(i + 1, dateNames[i], undefined, true));

            console.log('this.weeks = ', this.weeks);
        }
        return this.weeks;
    }
}
