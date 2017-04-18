import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';


import { Langs3Component } from './langs3.component';

import { Langs3RoutingModule } from "./langs3-routing.module";
import { Lang3DetailComponent } from './lang3.component';


@NgModule({
  imports: [
      CommonModule,
    FormsModule,
    Langs3RoutingModule 
  ],
      declarations: [Langs3Component, Lang3DetailComponent],
      providers:[]
})
export class Langs3Module { }
