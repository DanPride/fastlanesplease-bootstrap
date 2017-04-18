import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Invoice } from './invoice';

@Injectable()
export class InvoiceService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private invoicesUrl = 'https://solomonschariot.com/jsonfeed.php?domain=invoices';  // URL to web api

  constructor(private http: Http) { }

  getInvoices(): Promise<Invoice[]> {
    return this.http.get(this.invoicesUrl)
               .toPromise()
               .then(response => response.json() as Invoice[])
               .catch(this.handleError);
  }


  getInvoice(Id: number): Promise<Invoice> {
    const url = `${this.invoicesUrl}/${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Invoice)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.invoicesUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(Name: string): Promise<Invoice> {
    return this.http
      .post(this.invoicesUrl, JSON.stringify({Name: Name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(invoice: Invoice): Promise<Invoice> {
    const url = `${this.invoicesUrl}/${invoice.Id}`;
    return this.http
      .put(url, JSON.stringify(invoice), {headers: this.headers})
      .toPromise()
      .then(() => invoice)
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