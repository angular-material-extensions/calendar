import {ModuleWithProviders, NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule, NativeDateAdapter} from '@angular/material/core';
import {MatCalendarDailyViewComponent} from './components/mat-calendar-daily-view/mat-calendar-daily-view.component';
import {MatCalendarWeeklyViewComponent} from './components/mat-calendar-weekly-view/mat-calendar-weekly-view.component';
import {CalendarDateHelper, MatCalendarService} from './services';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCalendarMonthlyViewComponent} from './components/mat-calendar-monthly-view/mat-calendar-monthly-view.component';
import {MatCalendarMonthPerYearViewComponent} from './components/mat-calendar-yearly-view/mat-calendar-month-per-year-view/mat-calendar-month-per-year-view.component';
import {MatCalendarYearlyViewComponent} from './components/mat-calendar-yearly-view/mat-calendar-yearly-view.component';
import {MatCalendarComponent} from './components/mat-calendar.component';
import {CommonModule} from '@angular/common';


@NgModule({
    declarations: [
        MatCalendarComponent,
        // MatCalendarBody,
        MatCalendarYearlyViewComponent,
        MatCalendarMonthPerYearViewComponent,
        MatCalendarMonthlyViewComponent,
        MatCalendarWeeklyViewComponent,
        MatCalendarDailyViewComponent
    ],
    imports:
        [
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
    exports:
        [
            MatCalendarComponent,
            MatCalendarYearlyViewComponent,
            MatCalendarMonthPerYearViewComponent,
            MatCalendarMonthlyViewComponent,
            MatCalendarWeeklyViewComponent,
            MatCalendarDailyViewComponent
        ]
})
export class MatCalendarModule {

    static forRoot(): ModuleWithProviders<MatCalendarModule> {
        return {
            ngModule: MatCalendarModule,
            providers: [MatCalendarService, CalendarDateHelper, NativeDateAdapter]
        };
    }
}
