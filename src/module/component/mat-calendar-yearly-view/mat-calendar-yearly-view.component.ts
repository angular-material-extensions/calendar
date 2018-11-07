import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'mat-calendar-yearly-view',
  templateUrl: './mat-calendar-yearly-view.component.html',
  styleUrls: ['./mat-calendar-yearly-view.component.scss']
})
export class MatCalendarYearlyViewComponent implements OnInit {

  currentDate: Date = new Date();
  selectedDate: Date;

  constructor() {
  }

  ngOnInit() {
  }

}
