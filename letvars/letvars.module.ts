import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { LetvarsComponent } from './letvars.component';
import { LetvarService } from './letvars.service';
import { LetvarsRoutingModule } from "./letvars-routing.module";
import { LetvarDetailComponent } from './letvar.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      LetvarsRoutingModule
  ],
  declarations: [LetvarsComponent, LetvarDetailComponent],
  providers:[LetvarService]
})
export class LetvarsModule { }
