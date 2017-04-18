import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { Langs1Component } from './langs1.component';
import { Langs1RoutingModule } from "./langs1-routing.module";
import { Lang1DetailComponent } from './lang1.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      Langs1RoutingModule 
  ],
     declarations: [Langs1Component, Lang1DetailComponent],
     providers:[]
})
export class Langs1Module { }
