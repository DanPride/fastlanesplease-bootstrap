import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Langs4Component } from "./langs4.component";


const langs4routes: Routes = [
     { path:'', component: Langs4Component}
   ];


@NgModule({
  imports: [ RouterModule.forChild(langs4routes) ],
  exports: [ RouterModule ]
})

export class Langs4RoutingModule {}