import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Iso639 }                from './iso639';
import { Iso639Service }         from './iso639s.service';
import { AppService }            from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-iso639s',
  templateUrl: './iso639s.component.html',
  styleUrls: ['./iso639s.component.css']
})
export class Iso639sComponent implements OnInit {
  iso639s: Iso639[];
  selectedIso639: Iso639;
  term$ = new Subject<string>();
  constructor(
    private iso639service: Iso639Service,
    private router: Router,
    private appservice: AppService) {
      this.iso639service.searchIso639s(this.term$).subscribe(results =>this.iso639s = results);
     }

  getAllIso639s(): void {
    this.iso639service
        .getAllIso639s()
        .then(iso639s => this.iso639s = iso639s);
  }
searchIso639s(term$){
  this.term$.subscribe(term => this.searchIso639s(term$));
}
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.iso639service.create(name)
      .then(iso639 => {
        this.iso639s.push(iso639);
        this.selectedIso639 = null;
      });
  }

  delete(iso639: Iso639): void {
    this.iso639service
        .delete(iso639.Id)
        .then(() => {
          this.iso639s = this.iso639s.filter(h => h !== iso639);
          if (this.selectedIso639 === iso639) { this.selectedIso639 = null; }
        });
  }

  ngOnInit(): void {
    this.getAllIso639s();
  }

  onSelect(iso639: Iso639): void {
    this.selectedIso639 = iso639;
  }

   onDeSelect(): void {
    this.selectedIso639 = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/iso639', this.selectedIso639.Id]);
  }
}
