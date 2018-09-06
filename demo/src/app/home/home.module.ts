import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCalendarModule} from '@angular-material-extensions/calendar';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MatCalendarModule.forRoot(),
    HomeRoutingModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
