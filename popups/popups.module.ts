import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { PopupsComponent } from './popups.component';
import { PopupService } from './popups.service';
import { PopupsRoutingModule } from "./popups-routing.module";



@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    PopupsRoutingModule 
  ],
  declarations: [PopupsComponent],
  providers:[PopupService]
})
export class PopupsModule { }
