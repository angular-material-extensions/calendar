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

import {MatCalendarComponent} from './component/mat-calendar.component';
import {MatCalendarService} from './service/mat-calendar.service';
import {MatCalendarMonthlyViewComponent} from './component/mat-calendar-monthly-view/mat-calendar-monthly-view.component';
import {MatCalendarYearlyViewComponent} from './component/mat-calendar-yearly-view/mat-calendar-yearly-view.component';
import {
  MatCalendarMonthPerYearViewComponent
} from './component/mat-calendar-yearly-view/mat-calendar-month-per-year-view/mat-calendar-month-per-year-view.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NativeDateAdapter} from '@angular/material';

// Export module's public API
export {MatCalendarComponent} from './component/mat-calendar.component';
export {MatCalendarService} from './service/mat-calendar.service';

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
      MatCalendarMonthlyViewComponent
    ]
})
export class MatCalendarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatCalendarModule,
      providers: [MatCalendarService, NativeDateAdapter]
    };
  }
}
