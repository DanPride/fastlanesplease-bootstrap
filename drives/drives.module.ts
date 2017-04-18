import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DriveComponent } from './drive.component';
import { DrivesComponent } from "./drives.component";
import { DrivesRoutingModule } from "./drives-routing.module";


@NgModule({

  imports: [
       CommonModule,
        FormsModule,
        DrivesRoutingModule 
  ],
       declarations: [DrivesComponent, DriveComponent],
       providers:[]

})
export class DrivesModule { }
