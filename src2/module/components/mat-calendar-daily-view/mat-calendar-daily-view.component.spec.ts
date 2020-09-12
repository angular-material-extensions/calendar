import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCalendarDailyViewComponent } from './mat-calendar-daily-view.component';

describe('MatCalendarDailyViewComponent', () => {
  let component: MatCalendarDailyViewComponent;
  let fixture: ComponentFixture<MatCalendarDailyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCalendarDailyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCalendarDailyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
