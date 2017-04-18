import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Post }                from './post';
import { PostService }         from './posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  selectedPost: Post;

  constructor(
    private postservice: PostService,
    private router: Router) { }

  
  getPosts(): void {
    this.postservice
        .getPosts()
        .then(posts => this.posts = posts);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.postservice.create(name)
      .then(post => {
        this.posts.push(post);
        this.selectedPost = null;
      });
  }

  delete(post: Post): void {
    this.postservice
        .delete(post.Id)
        .then(() => {
          this.posts = this.posts.filter(h => h !== post);
          if (this.selectedPost === post) { this.selectedPost = null; }
        });
  }

  ngOnInit(): void {
    this.getPosts();
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }

  gotoDetail(): void {
    this.router.navigate(['/post', this.selectedPost.Id]);
  }
}
