import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesComponent } from "./places.component";


const placesroutes: Routes = [
     { path:'', component: PlacesComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(placesroutes) ],
  exports: [ RouterModule ]
})

export class PlacesRoutingModule {}