import {TestBed, inject} from '@angular/core/testing';

import {MatCalendarService} from './mat-calendar.service';
import {NativeDateAdapter} from '@angular/material';

describe('MatCalendarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatCalendarService, NativeDateAdapter]
    });
  });

  it('should create service', inject([MatCalendarService], (service: MatCalendarService) => {
    expect(service).toBeTruthy();
  }));

});
