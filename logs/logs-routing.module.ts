import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogsComponent } from "./logs.component";


const logsroutes: Routes = [
     { path:'', component: LogsComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(logsroutes) ],
  exports: [ RouterModule ]
})

export class LogsRoutingModule {}