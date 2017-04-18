import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OutputsComponent } from './outputs.component';
import { OutputService } from './outputs.service';
import { OutputsRoutingModule } from './outputs-routing.module';
import { OutputComponent } from './output.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OutputsRoutingModule
  ],
  declarations: [OutputsComponent, OutputComponent],
  providers:[OutputService]
})
export class OutputsModule { }
