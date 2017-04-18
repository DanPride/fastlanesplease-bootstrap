import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Iso639sComponent } from "./iso639s.component";


const iso639sroutes: Routes = [
     { path:'', component: Iso639sComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(iso639sroutes) ],
  exports: [ RouterModule ]
})

export class Iso639sRoutingModule {}