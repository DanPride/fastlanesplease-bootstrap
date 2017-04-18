import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PostsComponent } from './posts.component';
import { PostService } from './posts.service';
import { PostsRoutingModule } from "./posts-routing.module";
import { PostComponent } from './post.component';



@NgModule({
  imports: [
     CommonModule,
    FormsModule,
    PostsRoutingModule 
  ],
  declarations: [PostsComponent, PostComponent],
  providers:[PostService]
})
export class PostsModule { }
