import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from  '@angular/forms';

import { PeopleComponent } from "./people.component";
import { PeopleRoutingModule } from "./people-routing.module";
import { PersonComponent } from './person.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PeopleRoutingModule 
  ],
  declarations: [PeopleComponent, PersonComponent ],
  providers:[]
})
export class PeopleModule { }
