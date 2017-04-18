import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }      from 'rxjs/Observable';
import { Popup } from './popup';

@Injectable()
export class PopupService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private popupsUrl = 'https://solomonschariot.com/jsonfeed.php?domain=popups';  // URL to web api

  constructor(private http: Http) { }

  getAllPopups(): Promise<Popup[]> {
    return this.http.get(this.popupsUrl)
               .toPromise()
               .then(response => response.json() as Popup[])
               .catch(this.handleError);
  }
searchPopups(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term))
  }
rawSearch(term:string){
  return this.http.get(`${this.popupsUrl}&search={term}`).map(response => response.json() as Popup[]);
}
  getPopup(Id: number): Promise<Popup> {
    const url = `${this.popupsUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Popup)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.popupsUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Popup> {
    return this.http
      .post(this.popupsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(popup: Popup): Promise<Popup> {
    const url = `${this.popupsUrl}/${popup.Id}`;
    return this.http
      .put(url, JSON.stringify(popup), {headers: this.headers})
      .toPromise()
      .then(() => popup)
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