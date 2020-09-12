import {TestBed, inject} from '@angular/core/testing';

import {MatCalendarService} from './mat-calendar.service';
import {NativeDateAdapter} from '@angular/material/core';

describe('MatCalendarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatCalendarService, NativeDateAdapter]
    });
  });

  it('should create services', inject([MatCalendarService], (service: MatCalendarService) => {
    expect(service).toBeTruthy();
  }));

  // it('should selected date be a clone of the current date', inject([MatCalendarService], (services: MatCalendarService) => {
    // expect(services.currentDate).toEqual(services.selectedDate);
  // }));

});
