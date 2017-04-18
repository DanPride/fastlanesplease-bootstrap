import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineitemsComponent } from "./lineitems.component";



const lineitemsroutes: Routes = [
     { path:'', component: LineitemsComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(lineitemsroutes) ],
  exports: [ RouterModule ]
})

export class LineitemsRoutingModule {}