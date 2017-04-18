
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }    from 'rxjs/Observable';
import { Lang3 } from './lang3';

@Injectable()
export class Lang3Service {

  private headers = new Headers({'Content-Type': 'application/json'});
  private langs3Url = 'https://solomonschariot.com/jsonfeed.php?domain=langs3';  // URL to web api

  constructor(private http: Http) { }

  getAllLangs3(): Promise<Lang3[]> {
    return this.http.get(this.langs3Url)
               .toPromise()
               .then(response => response.json() as Lang3[])
               .catch(this.handleError);
  }

searchLangs3(term$:Observable<string>, debounceMS=400){
  return term$.debounceTime(400)
  .distinctUntilChanged()
  .switchMap(term => this.rawsearch(term))
}

rawsearch(term:string){
  return this.http.get(`${this.langs3Url}&search=${term}`)
  .map(response => response.json() as Lang3[]);
}
  getLang3(Id: number): Promise<Lang3> {
    const url = `${this.langs3Url}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Lang3)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.langs3Url}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Lang3> {
    return this.http
      .post(this.langs3Url, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(lang3: Lang3): Promise<Lang3> {
    const url = `${this.langs3Url}/${lang3.Id}`;
    return this.http
      .put(url, JSON.stringify(lang3), {headers: this.headers})
      .toPromise()
      .then(() => lang3)
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