import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';
import {MatCalendarService} from '../service/mat-calendar.service';
import {MatCalendarView} from '../type/mat-calendar-view.type';


@Component({
  selector: 'mat-calendar',
  templateUrl: './mat-calendar.component.html',
  styleUrls: ['./mat-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MatCalendarComponent implements OnInit, OnDestroy {

  currentDate: Date;

  @Input()
  selectedDate: Date;

  @Input()
  view: MatCalendarView = 'yearly';

  $onViewChangedSubscription: Subscription;

  constructor(public calendarService: MatCalendarService) {
    this.currentDate = this.calendarService.currentDate;
  }

  ngOnInit(): void {

    this.selectedDate ? this.calendarService.selectedDate = this.selectedDate : this.selectedDate = this.calendarService.selectedDate;

    this.$onViewChangedSubscription = this.calendarService
      .onViewChanged
      .subscribe((view: MatCalendarView) => this.view = view);
  }

  ngOnDestroy(): void {
    if (this.$onViewChangedSubscription) {
      this.$onViewChangedSubscription.unsubscribe();
    }
  }

  reset() {
    this.calendarService.reset();
    this.selectedDate = this.calendarService.selectedDate;
  }

}

