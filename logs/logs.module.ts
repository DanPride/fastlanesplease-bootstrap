import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LogsComponent } from './logs.component';
import { LogService } from './logs.service';
import { LogsRoutingModule } from "./logs-routing.module";
import { LogComponent } from './log.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LogsRoutingModule
  ],
  declarations: [LogsComponent, LogComponent],
  providers:[LogService]
})
export class LogsModule { }
