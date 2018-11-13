import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MatCalendarService} from '../../..';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'mat-calendar-yearly-view',
  templateUrl: './mat-calendar-yearly-view.component.html',
  styleUrls: ['./mat-calendar-yearly-view.component.scss']
})
export class MatCalendarYearlyViewComponent implements OnInit, OnDestroy {

  selectedDate: Date;
  year: number;
  $onDateResetSubscription: Subscription;

  constructor(public calendarService: MatCalendarService,
              private ref: ChangeDetectorRef) {
    // this.ref.detach();
    this.selectedDate = this.calendarService.selectedDate;
    this.year = this.selectedDate.getFullYear();
  }

  ngOnInit() {
    this.$onDateResetSubscription = this.calendarService
      .onDateReset
      .subscribe((date: Date) => this.resetYear());

    // setInterval(() => {
    //   console.log('round after 5s');
    // }, 5000);
  }

  ngOnDestroy(): void {
    if (this.$onDateResetSubscription) {
      this.$onDateResetSubscription.unsubscribe();
    }
  }

  nextYear() {
    this.selectedDate.setFullYear(++this.year);
    console.log('next year: ', this.year);
    console.log('selectedDate: ', this.selectedDate);
    console.log('calendarService.selectedDate: ', this.calendarService.selectedDate);
    this.ref.detectChanges();
  }

  previousYear() {
    this.selectedDate.setFullYear(--this.year);
    console.log('previous year: ', this.year);
    this.ref.detectChanges();
  }

  resetYear() {
    this.selectedDate = this.calendarService.selectedDate;
    this.year = this.selectedDate.getFullYear();
  }

}
