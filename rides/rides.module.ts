import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RidesComponent } from "./rides.component";
import { RidesRoutingModule }  from "./rides-routing.module";
import { RideComponent } from './ride.component';

@NgModule({
  imports: [  
    CommonModule,
    FormsModule,
    RidesRoutingModule 
  ],
  declarations: [RidesComponent, RideComponent],
  providers:[]
})
export class RidesModule { }
