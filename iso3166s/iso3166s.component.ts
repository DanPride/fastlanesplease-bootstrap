import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Iso3166 }                from './iso3166';
import { Iso3166Service }         from './iso3166s.service';
import { AppService }             from '../app.service';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

@Component({
  selector: 'app-iso3166s',
  templateUrl: './iso3166s.component.html',
  styleUrls: ['./iso3166s.component.css']
})
export class Iso3166sComponent implements OnInit {
  iso3166s: Iso3166[];
  selectedIso3166: Iso3166;
  term$ = new Subject<string>();

  constructor(
    private iso3166service: Iso3166Service,
    private router: Router,
    private appservice: AppService) {
          this.iso3166service.searchIso3166s(this.term$).subscribe(results =>this.iso3166s = results);
     }

  
  getAllIso3166s(): void {
    this.iso3166service
        .getAllIso3166s()
        .then(iso3166s => this.iso3166s = iso3166s);
  }
searchIso3166s(term$){
  this.term$.subscribe(term => this.searchIso3166s(term$));
}
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.iso3166service.create(name)
      .then(iso3166 => {
        this.iso3166s.push(iso3166);
        this.selectedIso3166 = null;
      });
  }

  delete(iso3166: Iso3166): void {
    this.iso3166service
        .delete(iso3166.Id)
        .then(() => {
          this.iso3166s = this.iso3166s.filter(h => h !== iso3166);
          if (this.selectedIso3166 === iso3166) { this.selectedIso3166 = null; }
        });
  }

  ngOnInit(): void {
    this.getAllIso3166s();
  }

  onSelect(iso3166: Iso3166): void {
    this.selectedIso3166 = iso3166;
  }

    onDeSelect(): void {
    this.selectedIso3166 = null;
  }


  gotoDetail(): void {
    this.router.navigate(['/iso3166', this.selectedIso3166.Id]);
  }
}
