import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PlacesComponent } from './places.component';
import { PlacesRoutingModule } from "./places-routing.module";
import { PlaceComponent } from './place.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PlacesRoutingModule 
  ],
  declarations: [PlacesComponent, PlaceComponent], 
  providers:[]
})
export class PlacesModule { }
