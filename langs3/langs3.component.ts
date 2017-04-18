import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Lang3 }                from './lang3';
import { Lang3Service }         from './langs3.service';
import { AppService }           from '../app.service';

import { Observable }           from 'rxjs/Observable';
import { Subject }              from 'rxjs/Subject';

@Component({
  selector: 'app-langs3',
  templateUrl: './langs3.component.html',
  styleUrls: ['./langs3.component.css']
})
export class Langs3Component implements OnInit {
  langs3: Lang3[];
  selectedLang3: Lang3;
  term$ = new Subject<string>();

  constructor(
    private lang3service: Lang3Service,
    private router: Router,
    private appservice: AppService) {
        this.lang3service.searchLangs3(this.term$).subscribe(results =>this.langs3 = results);
     }

  getAllLangs3(): void {
    this.lang3service
        .getAllLangs3()
        .then(langs3 => this.langs3 = langs3);
  }
searchLangs3(term$){
  this.lang3service.searchLangs3(term$)
  .subscribe(term=>this.langs3 = term);
}
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.lang3service.create(name)
      .then(lang3 => {
        this.langs3.push(lang3);
        this.selectedLang3 = null;
      });
  }

  delete(lang3: Lang3): void {
    this.lang3service
        .delete(lang3.Id)
        .then(() => {
          this.langs3 = this.langs3.filter(h => h !== lang3);
          if (this.selectedLang3 === lang3) { this.selectedLang3 = null; }
        });
  }

  ngOnInit(): void {
    this.getAllLangs3();
  }

  onSelect(lang3: Lang3): void {
    this.selectedLang3 = lang3;
  }

    onDeSelect(): void {
    this.selectedLang3 = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/lang3', this.selectedLang3.Id]);
  }
}
