import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Feed } from './feed';

@Injectable()
export class FeedService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private feedsUrl = 'https://solomonschariot.com/jsonfeed.php?domain=feeds';  // URL to web api

  constructor(private http: Http) { }

  getFeeds(): Promise<Feed[]> {
    return this.http.get(this.feedsUrl)
               .toPromise()
               .then(response => response.json() as Feed[])
               .catch(this.handleError);
  }


  getFeed(Id: number): Promise<Feed> {
    const url = `${this.feedsUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Feed)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.feedsUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Feed> {
    return this.http
      .post(this.feedsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(feed: Feed): Promise<Feed> {
    const url = `${this.feedsUrl}/${feed.Id}`;
    return this.http
      .put(url, JSON.stringify(feed), {headers: this.headers})
      .toPromise()
      .then(() => feed)
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