import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCalendarMonthlyViewComponent } from './mat-calendar-monthly-view.component';

describe('MatCalendarMonthlyViewComponent', () => {
  let component: MatCalendarMonthlyViewComponent;
  let fixture: ComponentFixture<MatCalendarMonthlyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCalendarMonthlyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCalendarMonthlyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
