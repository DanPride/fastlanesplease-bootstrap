import { Injectable }    from '@angular/core';
import { Headers, Http,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Bug } from './bug';

@Injectable()
export class BugService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private bugsUrl = 'https://solomonschariot.com/jsonfeed.php?domain=bugs';  // URL to web api
 
  constructor(private http: Http) { }

  getAllBugs(): Promise<Bug[]> {
    return this.http.get(this.bugsUrl)
               .toPromise()
               .then(response => response.json() as Bug[])
               .catch(this.handleError);
  }

    searchBugs(term$: Observable<string>, debounceMs = 400) {
    return term$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term))
  }

  rawSearch(term:string){
    return  this.http.get(`${this.bugsUrl}&search=${term}`)
      .map(response => response.json() as Bug[]);
  }
  getBug(Id: number): Promise<Bug> {
    const url = `${this.bugsUrl}&Id=${Id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Bug)
      .catch(this.handleError);
  }

  delete(Id: number): Promise<void> {
    const url = `${this.bugsUrl}/${Id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(Name: string): Promise<Bug> {
    return this.http
      .post(this.bugsUrl, JSON.stringify({Name: Name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(bug: Bug): Promise<Bug> {
    const url = `${this.bugsUrl}/${bug.Id}`;
    return this.http
      .put(url, JSON.stringify(bug), {headers: this.headers})
      .toPromise()
      .then(() => bug)
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