import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Iso639sComponent } from './iso639s.component';
import { Iso639sRoutingModule } from "./iso639s-routing.module";
import { Iso639DetailComponent } from './iso639.component';

@NgModule({
  imports: [
     CommonModule,
    FormsModule,
    Iso639sRoutingModule 
  ],
  declarations: [Iso639sComponent, Iso639DetailComponent],
  providers:[]
})
export class Iso639sModule { }
