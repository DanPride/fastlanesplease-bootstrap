import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedsComponent } from "./feeds.component";


const feedroutes: Routes = [
     { path:'', component: FeedsComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(feedroutes) ],
  exports: [ RouterModule ]
})

export class FeedsRoutingModule {}