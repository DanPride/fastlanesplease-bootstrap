import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomainsComponent } from "./domains.component";


const domroutes: Routes = [
     { path:'', component: DomainsComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(domroutes) ],
  exports: [ RouterModule ]
})

export class DomainsRoutingModule {}