import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MatCalendarComponent } from './mat-calendar.component';

describe('LibComponent', function () {
  let de: DebugElement;
  let comp: MatCalendarComponent;
  let fixture: ComponentFixture<MatCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatCalendarComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCalendarComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p.description'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <p> text', () => {
    fixture.detectChanges();
    const p = de.nativeElement;
    const description = 'angular responsive calendar built with material design for desktop and mobile';
    expect(p.textContent).toEqual(description);
  });
});
