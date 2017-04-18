import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }    from 'rxjs/Observable';
import { Langerr } from './langerr';

@Injectable()
export class LangerrService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private langerrsUrl = 'https://solomonschariot.com/jsonfeed.php?domain=langerrs';  // URL to web api

  constructor(private http: Http) { }

  getAllLangerrs(): Promise<Langerr[]> {
    return this.http.get(this.langerrsUrl)
               .toPromise()
               .then(response => response.json() as Langerr[])
               .catch(this.handleError);
  }
  searchLangerrs(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term))
  }
  rawSearch(term:string){
    return  this.http.get(`${this.langerrsUrl}&search=${term}`)
      .map(response => response.json() as Langerr[]);
  }
  getLangerr(Id: number): Promise<Langerr> {
    const url = `${this.langerrsUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Langerr)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.langerrsUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Langerr> {
    return this.http
      .post(this.langerrsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(langerr: Langerr): Promise<Langerr> {
    const url = `${this.langerrsUrl}/${langerr.Id}`;
    return this.http
      .put(url, JSON.stringify(langerr), {headers: this.headers})
      .toPromise()
      .then(() => langerr)
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