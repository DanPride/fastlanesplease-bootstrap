import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Post } from './post';

@Injectable()
export class PostService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private postsUrl = 'https://solomonschariot.com/jsonfeed.php?domain=posts';  // URL to web api

  constructor(private http: Http) { }

  getPosts(): Promise<Post[]> {
    return this.http.get(this.postsUrl)
               .toPromise()
               .then(response => response.json() as Post[])
               .catch(this.handleError);
  }


  getPost(id: number): Promise<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Post)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.postsUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Post> {
    return this.http
      .post(this.postsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(post: Post): Promise<Post> {
    const url = `${this.postsUrl}/${post.Id}`;
    return this.http
      .put(url, JSON.stringify(post), {headers: this.headers})
      .toPromise()
      .then(() => post)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/