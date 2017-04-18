import { Injectable }    from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Iso639 } from './iso639';

@Injectable()
export class Iso639Service {

  private headers = new Headers({'Content-Type': 'application/json'});
  private iso639sUrl = 'https://solomonschariot.com/jsonfeed.php?domain=iso639s';  // URL to web api

  constructor(private http: Http) { }

  getAllIso639s(): Promise<Iso639[]> {
    return this.http.get(this.iso639sUrl)
               .toPromise()
               .then(response => response.json() as Iso639[])
               .catch(this.handleError);
  }

searchIso639s(term$ : Observable<string>,debounceMS = 400){
  return term$.debounceTime(400)
  .distinctUntilChanged()
  .switchMap(term => this.rawsearch(term));
}
 rawsearch(term:string){
   return this.http.get(`${this.iso639sUrl}&search=${term}`)
   .map(response => response.json() as Iso639[])
 }
  getIso639(Id: number): Promise<Iso639> {
    const url = `${this.iso639sUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Iso639)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.iso639sUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Iso639> {
    return this.http
      .post(this.iso639sUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(iso639: Iso639): Promise<Iso639> {
    const url = `${this.iso639sUrl}/${iso639.Id}`;
    return this.http
      .put(url, JSON.stringify(iso639), {headers: this.headers})
      .toPromise()
      .then(() => iso639)
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