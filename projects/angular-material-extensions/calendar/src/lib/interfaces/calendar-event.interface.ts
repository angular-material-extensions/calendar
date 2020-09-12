export interface CalendarEvent {
  id?: string | number;
  title: string;
  allDay?: boolean;
  start: Date;
  end?: Date;
  // calendar: Calendar;
}
