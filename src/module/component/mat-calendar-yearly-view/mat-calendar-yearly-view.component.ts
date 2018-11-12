import {Component, OnInit} from '@angular/core';
import {MatCalendarService} from '../../..';

@Component({
  selector: 'mat-calendar-yearly-view',
  templateUrl: './mat-calendar-yearly-view.component.html',
  styleUrls: ['./mat-calendar-yearly-view.component.scss']
})
export class MatCalendarYearlyViewComponent implements OnInit {

  selectedDate: Date;
  year: number;

  constructor(public calendarService: MatCalendarService) {
    this.selectedDate = this.calendarService.selectedDate;
    this.year = this.selectedDate.getFullYear();
    console.log('this.selectedDate.getFullYear()', this.year);
  }

  ngOnInit() {
  }

  nextYear() {
    this.selectedDate.setFullYear(++this.year);
    console.log('next year: ', this.year);
  }

  previousYear() {
    this.selectedDate.setFullYear(--this.year);
    console.log('previous year: ', this.year);
  }
}
