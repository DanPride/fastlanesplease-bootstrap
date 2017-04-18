import { Injectable }    from '@angular/core';
import { Headers, Http, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Lang } from './lang';

@Injectable()
export class LangService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private langsUrl = 'https://solomonschariot.com/jsonfeed.php?domain=langs';  // URL to web api

  constructor(private http: Http) { }

  getAllLangs(): Promise<Lang[]> {
    return this.http.get(this.langsUrl)
               .toPromise()
               .then(response => response.json() as Lang[])
               .catch(this.handleError);
  }
searchLangs(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term))
  }
  rawSearch(term:string){
    return  this.http.get(`${this.langsUrl}&search=${term}`)
      .map(response => response.json() as Lang[]);
  }

  getLang(Id: number): Promise<Lang> {
    const url = `${this.langsUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Lang)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.langsUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Lang> {
    return this.http
      .post(this.langsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(lang: Lang): Promise<Lang> {
    const url = `${this.langsUrl}/${lang.Id}`;
    return this.http
      .put(url, JSON.stringify(lang), {headers: this.headers})
      .toPromise()
      .then(() => lang)
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