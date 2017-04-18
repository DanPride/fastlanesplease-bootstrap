import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RunComponent } from './run.component';
import { RunsComponent } from './runs.component';
import { RunsRoutingModule } from "./runs-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RunsRoutingModule 
  ],
  declarations: [RunsComponent, RunComponent],
  providers:[]
})
export class RunsModule { }
