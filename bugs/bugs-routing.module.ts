import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BugsComponent } from "./bugs.component";
import { BugComponent } from "./bug.component";

const bugsroutes: Routes = [
     { path:'', component: BugsComponent}, 
    { path: 'bug/:Id', component: BugComponent }
   ];


@NgModule({
  imports: [ RouterModule.forChild(bugsroutes) ],
  exports: [ RouterModule ]
})

export class BugsRoutingModule {}