import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Lang1 }                from './lang1';
import { Lang1Service }         from './langs1.service';
import { AppService }           from '../app.service';

import { Subject }              from 'rxjs/Subject';
import { Observable }           from 'rxjs/Observable';

@Component({
  selector: 'app-langs1',
  templateUrl: './langs1.component.html',
  styleUrls: ['./langs1.component.css']
})
export class Langs1Component implements OnInit {
  langs1: Lang1[];
  selectedLang1: Lang1;
  term$ = new Subject<string>();

  constructor(
    private lang1service: Lang1Service,
    private router: Router,
    private appservice : AppService) {
         this.lang1service.searchLangs1(this.term$).subscribe(results =>this.langs1 = results);
     }

searchLangs1(term$){
   this.term$.subscribe(term =>this.searchLangs1(term$));
 }

getAllLangs1(): void {
    this.lang1service
        .getAllLangs1()
        .then(langs1 => this.langs1 = langs1);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.lang1service.create(name)
      .then(lang1 => {
        this.langs1.push(lang1);
        this.selectedLang1 = null;
      });
  }

  delete(lang1: Lang1): void {
    this.lang1service
        .delete(lang1.Id)
        .then(() => {
          this.langs1 = this.langs1.filter(h => h !== lang1);
          if (this.selectedLang1 === lang1) { this.selectedLang1 = null; }
        });
  }

  ngOnInit(): void {
    this.getAllLangs1();
  }

  onSelect(lang1: Lang1): void {
    this.selectedLang1 = lang1;
  }
    onDeSelect(): void {
    this.selectedLang1 = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/lang1', this.selectedLang1.Id]);
  }
}

