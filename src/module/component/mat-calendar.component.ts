import {Component} from '@angular/core';

export type MatCalendarView = 'yearly' | 'monthly' | 'weekly' | 'daily';

@Component({
  selector: 'mat-calendar',
  templateUrl: './mat-calendar.component.html',
  styleUrls: ['./mat-calendar.component.scss']
})
export class MatCalendarComponent {

  currentDate: Date = new Date();
  selectedDate: Date;
  view: MatCalendarView = 'yearly';
}

