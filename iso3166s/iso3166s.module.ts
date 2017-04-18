import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { Iso3166sComponent } from './iso3166s.component';
import { Iso3166sRoutingModule } from "./iso3166s-routing.module";
import { Iso3166DetailComponent } from './iso3166.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      Iso3166sRoutingModule 
  ],
  declarations: [Iso3166sComponent, Iso3166DetailComponent],
  providers:[]
})
export class Iso3166sModule { }
