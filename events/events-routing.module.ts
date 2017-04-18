import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from "./events.component";
import { EventsShortComponent } from "./eventsshort.component";
import { EventComponent } from "./event.component";

const eventroutes: Routes = [

    { path:'', 
    children: [
      {path: '', component: EventsComponent}, 
       {path: 'short', component: EventsShortComponent}, 
      { path: '/:id', component: EventComponent }
    ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild(eventroutes) ],
  exports: [ RouterModule ]
})

export class EventsRoutingModule {}