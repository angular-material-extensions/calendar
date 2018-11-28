import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCalendarWeeklyViewComponent } from './mat-calendar-weekly-view.component';

describe('MatCalendarWeeklyViewComponent', () => {
  let component: MatCalendarWeeklyViewComponent;
  let fixture: ComponentFixture<MatCalendarWeeklyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCalendarWeeklyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCalendarWeeklyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
