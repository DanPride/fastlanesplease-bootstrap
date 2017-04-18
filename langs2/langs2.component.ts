import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Lang2 }                from './lang2';
import { Lang2Service }         from './langs2.service';
import { AppService }           from '../app.service';

import { Observable }           from 'rxjs/Observable';
import { Subject }              from 'rxjs/Subject';


@Component({
  selector: 'app-langs2',
  templateUrl: './langs2.component.html',
  styleUrls: ['./langs2.component.css']
})
export class Langs2Component implements OnInit {
  langs2: Lang2[];
  selectedLang2: Lang2;
  term$ = new Subject<string>();

  constructor(
    private lang2service: Lang2Service,
    private router: Router,
    private appservice: AppService) { 
        this.lang2service.searchLangs2(this.term$).subscribe(results =>this.langs2 = results);
    }

  
  getAllLang2s(): void {
    this.lang2service
        .getAllLangs2()
        .then(langs2 => this.langs2 = langs2);
  }

searchLangs2(term$){
  this.lang2service.searchLangs2(term$)
  .subscribe(term=>this.langs2 = term);
}
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.lang2service.create(name)
      .then(lang2 => {
        this.langs2.push(lang2);
        this.selectedLang2 = null;
      });
  }

  delete(lang2: Lang2): void {
    this.lang2service
        .delete(lang2.Id)
        .then(() => {
          this.langs2 = this.langs2.filter(h => h !== lang2);
          if (this.selectedLang2 === lang2) { this.selectedLang2 = null; }
        });
  }

  ngOnInit(): void {
    this.getAllLang2s();
  }

  onSelect(lang2: Lang2): void {
    this.selectedLang2 = lang2;
  }

   onDeSelect(): void {
    this.selectedLang2 = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/lang2', this.selectedLang2.Id]);
  }
}
