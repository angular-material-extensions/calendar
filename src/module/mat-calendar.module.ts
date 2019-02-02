import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {
  MatDialogModule,
  MatDividerModule,
  MatButtonModule,
  MatIconModule,
  MatRippleModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatCalendarBody
} from '@angular/material';

import {MatCalendarService} from './services/mat-calendar.service';
import {MatCalendarComponent} from './components/mat-calendar.component';
import {MatCalendarMonthlyViewComponent} from './components/mat-calendar-monthly-view/mat-calendar-monthly-view.component';
import {MatCalendarYearlyViewComponent} from './components/mat-calendar-yearly-view/mat-calendar-yearly-view.component';
import {
  MatCalendarMonthPerYearViewComponent
} from './components/mat-calendar-yearly-view/mat-calendar-month-per-year-view/mat-calendar-month-per-year-view.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NativeDateAdapter} from '@angular/material';
import {MatCalendarWeeklyViewComponent} from './components/mat-calendar-weekly-view/mat-calendar-weekly-view.component';
import {MatCalendarDailyViewComponent} from './components/mat-calendar-daily-view/mat-calendar-daily-view.component';
import {CalendarDateHelper} from './services/helpers/calendar-date-helper.service';

// Export module's public API
export {MatCalendarView} from './type/mat-calendar-view.type';
export {MatCalendarComponent} from './components/mat-calendar.component';
export {MatCalendarService} from './services/mat-calendar.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [MatCalendarComponent],
  declarations:
    [
      MatCalendarBody,
      MatCalendarComponent,
      MatCalendarYearlyViewComponent,
      MatCalendarMonthPerYearViewComponent,
      MatCalendarMonthlyViewComponent,
      MatCalendarWeeklyViewComponent,
      MatCalendarDailyViewComponent
    ]
})
export class MatCalendarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatCalendarModule,
      providers: [MatCalendarService, CalendarDateHelper, NativeDateAdapter]
    };
  }
}
