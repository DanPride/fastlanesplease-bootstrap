import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { EventComponent } from './event.component';
import { EventsComponent } from "./events.component";
import { EventsShortComponent } from "./eventsshort.component";
import { EventsRoutingModule } from "./events-routing.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      EventsRoutingModule,
      NgbModule
  ],
      declarations: [EventsComponent, EventComponent, EventsShortComponent],
      providers: []

})
export class EventsModule { }
