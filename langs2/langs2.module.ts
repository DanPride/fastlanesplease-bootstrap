import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { Langs2Component } from './langs2.component';

import { Langs2RoutingModule } from "./langs2-routing.module";
import { Lang2DetailComponent } from './lang2.component';


@NgModule({
  imports: [
       CommonModule,
    FormsModule,
    Langs2RoutingModule 
  ],
      declarations: [Langs2Component, Lang2DetailComponent],
      providers:[]
})
export class Langs2Module { }
