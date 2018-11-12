import {EventEmitter, Injectable} from '@angular/core';
import {MatCalendarView} from '../..';

@Injectable()
export class MatCalendarService {

  currentDate: Date = new Date();
  selectedDate: Date = this.currentDate;

  // events
  onViewChanged: EventEmitter<MatCalendarView> = new EventEmitter<MatCalendarView>();

  constructor() {
  }

  update(date: Date, view: MatCalendarView) {
    this.selectedDate = date;
    this.onViewChanged.emit(view);
  }
}
