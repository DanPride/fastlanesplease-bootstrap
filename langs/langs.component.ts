
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Lang }                from './lang';
import { LangService }         from './langs.service';
import { AppService }         from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-langs',
  templateUrl: './langs.component.html',
  styleUrls: ['./langs.component.css']
})
export class LangsComponent implements OnInit {
  langs: Lang[];
  selectedLang: Lang;
 term$ = new Subject<string>();
  constructor(
    private langservice: LangService,
    private router: Router,
    private appservice:AppService) {
       this.langservice.searchLangs(this.term$).subscribe(results =>this.langs = results);
     }
searchLangs(term$){
   this.term$.subscribe(term =>this.searchLangs(term$));
 }
  
  getAllLangs(): void {
    this.langservice
        .getAllLangs()
        .then(langs => this.langs = langs);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.langservice.create(name)
      .then(lang => {
        this.langs.push(lang);
        this.selectedLang = null;
      });
  }

  delete(lang: Lang): void {
    this.langservice
        .delete(lang.Id)
        .then(() => {
          this.langs = this.langs.filter(h => h !== lang);
          if (this.selectedLang === lang) { this.selectedLang = null; }
        });
  }

  ngOnInit(): void {
    this.getAllLangs();
  }

  onSelect(lang: Lang): void {
    this.selectedLang = lang;
  }
    onDeSelect(): void {
    this.selectedLang = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/lang', this.selectedLang.Id]);
  }
}
