import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { LettextsComponent } from './lettexts.component';
import { LettextService } from './lettexts.service';
import { LettextsRoutingModule } from "./lettexts-routing.module";
import { LettextDetailComponent } from './lettext.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LettextsRoutingModule 
  ],
  declarations: [LettextsComponent, LettextDetailComponent], 
  providers:[LettextService]
})
export class LettextsModule { }
