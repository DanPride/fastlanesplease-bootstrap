import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import { Iso3166 } from './iso3166';

@Injectable()
export class Iso3166Service {

  private headers = new Headers({'Content-Type': 'application/json'});
  private iso3166sUrl = 'https://solomonschariot.com/jsonfeed.php?domain=iso3166s';  // URL to web api

  constructor(private http: Http) { }

  getAllIso3166s(): Promise<Iso3166[]> {
    return this.http.get(this.iso3166sUrl)
               .toPromise()
               .then(response => response.json() as Iso3166[])
               .catch(this.handleError);
  }
searchIso3166s(term$:Observable<string>, debounceMs = 400){
  return term$.debounceTime(400)
  .distinctUntilChanged()
  .switchMap(term => this.rawsearch(term));
}

rawsearch(term:string){
  return this.http.get(`${this.iso3166sUrl}&search=${term}`)
  .map(response => response.json() as Iso3166[]);
}
  getIso3166(Id: number): Promise<Iso3166> {
    const url = `${this.iso3166sUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Iso3166)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.iso3166sUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(Name: string): Promise<Iso3166> {
    return this.http
      .post(this.iso3166sUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(iso3166: Iso3166): Promise<Iso3166> {
    const url = `${this.iso3166sUrl}/${iso3166.Id}`;
    return this.http
      .put(url, JSON.stringify(iso3166), {headers: this.headers})
      .toPromise()
      .then(() => iso3166)
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