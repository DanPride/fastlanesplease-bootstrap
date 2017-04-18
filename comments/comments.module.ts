import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommentsComponent } from './comments.component';
import { CommentsRoutingModule } from "./comments-routing.module";
import { CommentDetailComponent } from './comment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommentsRoutingModule
  ],
     declarations: [CommentsComponent, CommentDetailComponent],
     providers:[]

})
export  class CommentsModule { }




