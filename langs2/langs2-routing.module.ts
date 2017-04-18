import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Langs2Component } from "./langs2.component";


const langs2routes: Routes = [
     { path:'', component: Langs2Component}
   ];


@NgModule({
  imports: [ RouterModule.forChild(langs2routes) ],
  exports: [ RouterModule ]
})

export class Langs2RoutingModule {}