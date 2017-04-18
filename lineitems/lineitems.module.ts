import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { LineitemsComponent } from './lineitems.component';
import { LineitemService } from './lineitems.service';
import { LineitemsRoutingModule } from "./lineitems-routing.module";
import { LineitemDetailComponent } from './lineitem.component';

@NgModule({
  imports: [
     CommonModule,
    FormsModule,
    LineitemsRoutingModule 
  ],
  declarations: [LineitemsComponent, LineitemDetailComponent],
  providers:[LineitemService]
})
export class LineitemsModule { }
