import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LangerrsComponent } from './langerrs.component';
import { LangerrsRoutingModule } from "./langerrs-routing.module";
import { LangerrDetailComponent } from './langerr.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LangerrsRoutingModule 
  ],
  declarations: [LangerrsComponent, LangerrDetailComponent],
  providers:[]
})
export class LangerrsModule { }
