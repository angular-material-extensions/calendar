import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MatCalendarComponent } from './component/mat-calendar.component';
import { MatCalendarService } from './service/mat-calendar.service';

// Export module's public API
export { MatCalendarComponent } from './component/mat-calendar.component';
export { MatCalendarService } from './service/mat-calendar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MatCalendarComponent],
  declarations: [MatCalendarComponent]
})
export class MatCalendarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatCalendarModule,
      providers: [MatCalendarService]
    };
  }
}
