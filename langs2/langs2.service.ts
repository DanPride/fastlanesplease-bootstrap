
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }    from 'rxjs/Observable';
import { Lang2 } from './lang2';

@Injectable()
export class Lang2Service {

  private headers = new Headers({'Content-Type': 'application/json'});
  private langs2Url = 'https://solomonschariot.com/jsonfeed.php?domain=langs2';  // URL to web api

  constructor(private http: Http) { }

  getAllLangs2(): Promise<Lang2[]> {
    return this.http.get(this.langs2Url)
               .toPromise()
               .then(response => response.json() as Lang2[])
               .catch(this.handleError);
  }

searchLangs2(term$:Observable<string>, debounceMS=400){
  return term$.debounceTime(400)
  .distinctUntilChanged()
  .switchMap(term=> this.rawsearch(term));
}
rawsearch(term:string){
  return this.http.get(`${this.langs2Url}&search=${term}`)
  .map(response => response.json() as Lang2[]);
}
  getLang2(Id: number): Promise<Lang2> {
    const url = `${this.langs2Url}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Lang2)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.langs2Url}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Lang2> {
    return this.http
      .post(this.langs2Url, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(lang2: Lang2): Promise<Lang2> {
    const url = `${this.langs2Url}/${lang2.Id}`;
    return this.http
      .put(url, JSON.stringify(lang2), {headers: this.headers})
      .toPromise()
      .then(() => lang2)
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