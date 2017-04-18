import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Event }                from './event';
import { EventService }         from './events.service';
import { AppService }           from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Run }  from '../runs/run';
import { RunService }         from '../runs/runs.service';

@Component({
  selector: 'app-events',
  templateUrl: './eventsshort.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsShortComponent implements OnInit {
  runs: Run[];
  events: Event[];
  selectedEvent: Event;
  term$ = new Subject<string>();

  constructor(
    private eventservice: EventService,
    private router: Router,
    private appservice : AppService,
    private runservice: RunService) {
      this.eventservice.searchEvents(this.term$).subscribe(results =>this.events = results);
    }

 searchEvents(term$){
   this.term$.subscribe(term =>this.searchEvents(term$));
 }
  getAllEvents(): void {
    this.eventservice
        .getAllEvents()
        .then(events => this.events = events);
  }
  getAllRuns():void{
    this.runservice
    .getAllRuns()
    .then(runs=> this.runs = runs)
  }
  addEvent(EventName: string): void {
    EventName = EventName.trim();
    
  }
  delete(event: Event): void {
    this.eventservice
        .delete(event.Id)
        .then(() => {
          this.events = this.events.filter(h => h !== event);
          if (this.selectedEvent === event) { this.selectedEvent = null; }
        });
  }
  ngOnInit(): void {
    this.getAllEvents();
    this.getAllRuns();
  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }
    onDeSelect(): void {
    this.selectedEvent = null;
  }

  gotoDetail(): void {
    this.router.navigate(['event/', this.selectedEvent.Id]);
  }
}
