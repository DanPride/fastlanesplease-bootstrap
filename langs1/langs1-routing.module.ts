import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Langs1Component } from "./langs1.component";


const langs1routes: Routes = [
     { path:'', component: Langs1Component}
   ];


@NgModule({
  imports: [ RouterModule.forChild(langs1routes) ],
  exports: [ RouterModule ]
})

export class Langs1RoutingModule {}