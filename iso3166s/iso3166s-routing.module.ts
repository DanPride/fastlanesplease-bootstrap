import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Iso3166sComponent } from "./iso3166s.component";


const iso3166sroutes: Routes = [
     { path:'', component: Iso3166sComponent}
   ];

@NgModule({
  imports: [ RouterModule.forChild(iso3166sroutes) ],
  exports: [ RouterModule ]
})

export class Iso3166sRoutingModule {}