import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LangerrsComponent } from "./langerrs.component";


const langerrsroutes: Routes = [
     { path:'', component: LangerrsComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(langerrsroutes) ],
  exports: [ RouterModule ]
})

export class LangerrsRoutingModule {}