import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from "./posts.component";


const postsroutes: Routes = [
     { path:'', component: PostsComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(postsroutes) ],
  exports: [ RouterModule ]
})

export class PostsRoutingModule {}