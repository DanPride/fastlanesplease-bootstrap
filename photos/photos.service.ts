import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Photo } from './photo';

@Injectable()
export class PhotoService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private photosUrl = 'https://solomonschariot.com/jsonfeed.php?domain=photos';  // URL to web api

  constructor(private http: Http) { }

  getPhotos(): Promise<Photo[]> {
    return this.http.get(this.photosUrl)
               .toPromise()
               .then(response => response.json() as Photo[])
               .catch(this.handleError);
  }


  getPhoto(Id: number): Promise<Photo> {
    const url = `${this.photosUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Photo)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.photosUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Photo> {
    return this.http
      .post(this.photosUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(photo: Photo): Promise<Photo> {
    const url = `${this.photosUrl}/${photo.Id}`;
    return this.http
      .put(url, JSON.stringify(photo), {headers: this.headers})
      .toPromise()
      .then(() => photo)
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