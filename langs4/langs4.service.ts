
import { Injectable }    from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Lang4 } from './lang4';

@Injectable()
export class Lang4Service {

  private headers = new Headers({'Content-Type': 'application/json'});
  private langs4Url = 'https://solomonschariot.com/jsonfeed.php?domain=langs4';  // URL to web api

  constructor(private http: Http) { }

getAllLangs4(): Promise<Lang4[]> {
    return this.http.get(this.langs4Url)
               .toPromise()
               .then(response => response.json() as Lang4[])
               .catch(this.handleError);
  }

searchLangs4(term$:Observable<string>, debounceMS=400){
return term$.debounceTime(400)
.distinctUntilChanged()
.switchMap(term => this.rawsearch(term));
}

rawsearch(term:string){
  return this.http.get(`${this.langs4Url}&search=${term}`)
  .map(response => response.json() as Lang4[]);
}

getLang4(Id: number): Promise<Lang4> {
    const url = `${this.langs4Url}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Lang4)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.langs4Url}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Lang4> {
    return this.http
      .post(this.langs4Url, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(lang4: Lang4): Promise<Lang4> {
    const url = `${this.langs4Url}/${lang4.Id}`;
    return this.http
      .put(url, JSON.stringify(lang4), {headers: this.headers})
      .toPromise()
      .then(() => lang4)
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