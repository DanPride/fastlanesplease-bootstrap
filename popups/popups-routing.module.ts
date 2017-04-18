import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupsComponent } from "./popups.component";


const popupsroutes: Routes = [
     { path:'', component: PopupsComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(popupsroutes) ],
  exports: [ RouterModule ]
})

export class PopupsRoutingModule {}