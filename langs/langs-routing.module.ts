import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LangsComponent } from "./langs.component";

const langsRoutes: Routes = [
     { path:'', component: LangsComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(langsRoutes) ],
  exports: [ RouterModule ]
})

export class LangsRoutingModule {}