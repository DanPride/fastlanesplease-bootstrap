import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { LangsComponent } from './langs.component';
import { LangsRoutingModule } from "./langs-routing.module";
import { LangDetailComponent } from './lang.component';

@NgModule({
  imports: [   
    CommonModule,
    FormsModule,
    LangsRoutingModule 
    ],
    declarations: [LangsComponent, LangDetailComponent], 
    providers: []
})
export class LangsModule { }
