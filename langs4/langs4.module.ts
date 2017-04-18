import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { Langs4Component } from './langs4.component';

import { Langs4RoutingModule } from "./langs4-routing.module";
import { Lang4DetailComponent } from './lang4.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      Langs4RoutingModule 
  ], 
    declarations: [Langs4Component, Lang4DetailComponent], 
    providers:[]
})
export class Langs4Module { }
