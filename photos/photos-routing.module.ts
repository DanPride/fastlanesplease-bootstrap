import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from "./photos.component";


const photosroutes: Routes = [
     { path:'', component: PhotosComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(photosroutes) ],
  exports: [ RouterModule ]
})

export class PhotosRoutingModule {}