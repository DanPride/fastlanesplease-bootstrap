import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { BugService } from './bugs.service';
import { BugsRoutingModule } from "./bugs-routing.module";
import { BugsComponent } from './bugs.component';
import { BugComponent } from './bug.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BugsRoutingModule 
   ],    
   declarations: [BugsComponent, BugComponent],
   providers: [BugService]
})
export class BugsModule { }
