import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PhotosComponent } from './photos.component';
import { PhotoService } from './photos.service';
import { PhotosRoutingModule } from "./photos-routing.module";
import { PhotoComponent } from './photo.component';



@NgModule({
  imports: [
     CommonModule,
    FormsModule,
    PhotosRoutingModule 
  ],
  declarations: [PhotosComponent, PhotoComponent],
  providers:[PhotoService]
})
export class PhotosModule { }
