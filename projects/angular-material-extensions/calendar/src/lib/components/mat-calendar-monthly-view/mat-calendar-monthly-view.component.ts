import {Component, Input, OnInit} from '@angular/core';
import {CalendarDateHelper} from '../../services';
import {MatCalendarCell} from '@angular/material/datepicker';
import {NativeDateAdapter} from '@angular/material/core';

@Component({
    selector: 'mat-calendar-monthly-view',
    templateUrl: './mat-calendar-monthly-view.component.html',
    styleUrls: ['./mat-calendar-monthly-view.component.scss'],
})
export class MatCalendarMonthlyViewComponent implements OnInit {

    /** The cells to display in the table. */
    @Input() rows: MatCalendarCell[][];

    /** The cell number of the active cell in the table. */
    @Input() activeCell = 0;

    /** The number of columns in the table. */
    @Input() numCols = 7;

    /**
     * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
     * maintained even as the table resizes.
     */
    @Input() cellAspectRatio = 1;

    /** The minimum number of free cells needed to fit the label in the first row. */
    @Input() labelMinRequiredCells: number;

    /** The number of blank cells in the first row before the 1st of the month. */
    _firstWeekOffset: number;

    /** The date of the month that today falls on. Null if today is in another month. */
    _todayDate: number | null;

    /** The names of the weekdays. */
    _weekdays: { long: string, narrow: string }[];

    constructor(public nativeDateAdapter: NativeDateAdapter,
                public calendarDateHelper: CalendarDateHelper) {
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

        this.rows = this.calendarDateHelper.createWeekCells();

        console.log(this.rows);
    }

    /** The number of blank cells to put at the beginning for the first row. */
    get _firstRowOffset(): number {
        return this.rows && this.rows.length && this.rows[0].length ?
            this.numCols - this.rows[0].length : 0;
    }

    _isActiveCell(rowIndex: number, colIndex: number): boolean {
        let cellNumber = rowIndex * this.numCols + colIndex;

        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }

        return cellNumber === this.activeCell;
    }
}
