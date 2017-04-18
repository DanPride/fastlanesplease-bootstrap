
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }    from 'rxjs/Observable';
import { Lang1 } from './lang1';

@Injectable()
export class Lang1Service {

  private headers = new Headers({'Content-Type': 'application/json'});
  private langs1Url = 'https://solomonschariot.com/jsonfeed.php?domain=langs1';  // URL to web api

  constructor(private http: Http) { }

searchLangs1(term$:Observable<string>,debounceMS=400){
return term$.debounceTime(400)
.distinctUntilChanged()
.switchMap(term => this.rawsearch(term));
}

rawsearch(term:string){
  return this.http.get(`${this.langs1Url}&search=${term}`)
  .map(response=>response.json() as Lang1[]);
}

getAllLangs1(): Promise<Lang1[]> {
  return this.http.get(this.langs1Url)
              .toPromise()
              .then(response => response.json() as Lang1[])
              .catch(this.handleError);
}


  getLang1(Id: number): Promise<Lang1> {
    const url = `${this.langs1Url}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Lang1)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.langs1Url}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Lang1> {
    return this.http
      .post(this.langs1Url, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(lang1: Lang1): Promise<Lang1> {
    const url = `${this.langs1Url}/${lang1.Id}`;
    return this.http
      .put(url, JSON.stringify(lang1), {headers: this.headers})
      .toPromise()
      .then(() => lang1)
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