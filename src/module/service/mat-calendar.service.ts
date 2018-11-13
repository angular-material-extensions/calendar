import {EventEmitter, Injectable} from '@angular/core';
import {MatCalendarView} from '../..';
import * as _moment from 'moment';
import {NativeDateAdapter} from '@angular/material';

const moment = _moment;

@Injectable()
export class MatCalendarService {

  currentDate: Date = new Date();
  selectedDate: Date = new Date();

  // events
  onViewChanged: EventEmitter<MatCalendarView> = new EventEmitter<MatCalendarView>();
  onDateReset: EventEmitter<Date> = new EventEmitter<Date>();

  constructor(private _nativeDateAdapter: NativeDateAdapter) {
  }

  reset() {
    this.selectedDate = this._nativeDateAdapter.clone(this.currentDate);
    this.onDateReset.emit(this.selectedDate);
  }

  update(date: Date, view: MatCalendarView) {
    this.selectedDate = date;
    this.onViewChanged.emit(view);
  }
}
