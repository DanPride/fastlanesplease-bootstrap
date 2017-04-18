import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Bug }           from './bug';

@Injectable()
export class BugsSearchService {

  constructor(private http: Http) {}

  getBugsSearch(term: string): Observable<Bug[]> {
    return this.http
               .get(`https://solomonschariot.com/jsonfeed.php`)
               .map((r: Response) => r.json() as Bug[]);
  }
}
