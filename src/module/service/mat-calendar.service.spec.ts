import {TestBed, inject} from '@angular/core/testing';

import {MatCalendarService} from './mat-calendar.service';

describe('MatCalendarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatCalendarService]
    });
  });

  it('should create service', inject([MatCalendarService], (service: MatCalendarService) => {
    expect(service).toBeTruthy();
  }));

});
