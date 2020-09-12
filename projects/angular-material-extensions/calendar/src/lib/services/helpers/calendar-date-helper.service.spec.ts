import {inject, TestBed} from '@angular/core/testing';

import {CalendarDateHelper} from './calendar-date-helper.service';
import {NativeDateAdapter} from '@angular/material';

describe('CalendarDateHelper', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [CalendarDateHelper, NativeDateAdapter]
  }));


  it('should be created', () => {
    const service: CalendarDateHelper = TestBed.get(CalendarDateHelper);
    expect(service).toBeTruthy();
  });

  it('should be created2', () => {
    const service: CalendarDateHelper = TestBed.get(CalendarDateHelper);

    const date = new Date(), y = date.getFullYear(), m = date.getMonth();
    const firstDay = new Date(y, m, 1);
    const lastDay = new Date(y, m + 1, 0);


    console.log('date: ', date);
    console.log('firstDay: ', firstDay);
    console.log('lastDay: ', lastDay);

    const firstOfMonth: Date = service.getFirstOfMonth();
    console.log('firstOfMonth', firstOfMonth);
    expect(service.getFirstOfMonth()).toBeTruthy();

    expect(service.getFirstOfMonth()).toEqual(firstDay);
  });

  it('should the first week offset of 11.18 equal 4 as example', () => {
    const service: CalendarDateHelper = TestBed.get(CalendarDateHelper);
    const date = new Date(2018, 11);
    expect(service.getFirstWeekOffset(date)).toEqual(4);
  });

  it('should create week cells', () => {
    const service: CalendarDateHelper = TestBed.get(CalendarDateHelper);

    // console.log('weeks = ', service.weeks);
    service.createWeekCells();
    // console.log('weeks = ', service.weeks);

    // console.log(service.weeks[1]);

  });
});
