import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { DaysComponent } from './days.component';
import { DayService } from './days.service';
import { DaysRoutingModule } from "./days-routing.module";
import { DayDetailComponent } from './day.component';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    DaysRoutingModule 
  ],
  declarations: [DaysComponent, DayDetailComponent],
  providers:[DayService]
})
export class DaysModule { }
