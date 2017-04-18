import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Langs3Component } from "./langs3.component";


const langs3routes: Routes = [
     { path:'', component: Langs3Component}
   ];


@NgModule({
  imports: [ RouterModule.forChild(langs3routes) ],
  exports: [ RouterModule ]
})

export class Langs3RoutingModule {}