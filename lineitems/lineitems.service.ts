import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Lineitem } from './lineitem';

@Injectable()
export class LineitemService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private lineitemsUrl = 'https://solomonschariot.com/jsonfeed.php?domain=lineitems';  // URL to web api

  constructor(private http: Http) { }

  getLineitems(): Promise<Lineitem[]> {
    return this.http.get(this.lineitemsUrl)
               .toPromise()
               .then(response => response.json() as Lineitem[])
               .catch(this.handleError);
  }


  getLineitem(Id: number): Promise<Lineitem> {
    const url = `${this.lineitemsUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Lineitem)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.lineitemsUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Lineitem> {
    return this.http
      .post(this.lineitemsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(lineitem: Lineitem): Promise<Lineitem> {
    const url = `${this.lineitemsUrl}/${lineitem.Id}`;
    return this.http
      .put(url, JSON.stringify(lineitem), {headers: this.headers})
      .toPromise()
      .then(() => lineitem)
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