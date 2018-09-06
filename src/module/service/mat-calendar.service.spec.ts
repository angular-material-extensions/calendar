import { TestBed, inject } from '@angular/core/testing';

import { MatCalendarService } from './mat-calendar.service';

describe('LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatCalendarService]
    });
  });

  it('should create service', inject([MatCalendarService], (service: MatCalendarService) => {
    expect(service).toBeTruthy();
  }));

  it('should say hello to stranger', inject([MatCalendarService], (service: MatCalendarService) => {
    expect(service.sayHello()).toBe('Hello Stanger!');
  }));

 it('should say hello to provided user', inject([MatCalendarService], (service: MatCalendarService) => {
    expect(service.sayHello('ng-hacker')).toBe('Hello ng-hacker!');
  }));
});
