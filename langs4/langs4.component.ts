import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Lang4 }                from './lang4';
import { Lang4Service }         from './langs4.service';
import { AppService }           from '../app.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-langs4',
  templateUrl: './langs4.component.html',
  styleUrls: ['./langs4.component.css']
})
export class Langs4Component implements OnInit {
  langs4: Lang4[];
  selectedLang4: Lang4;
  term$ = new Subject<string>();

  constructor(
    private lang4service: Lang4Service,
    private router: Router,
    private appservice : AppService) {
      this.lang4service.searchLangs4(this.term$).subscribe(results => this.langs4 = results);
     }

  
  getAllLangs4(): void {
    this.lang4service
        .getAllLangs4()
        .then(langs4 => this.langs4 = langs4);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.lang4service.create(name)
      .then(lang4 => {
        this.langs4.push(lang4);
        this.selectedLang4 = null;
      });
  }

  delete(lang4: Lang4): void {
    this.lang4service
        .delete(lang4.Id)
        .then(() => {
          this.langs4 = this.langs4.filter(h => h !== lang4);
          if (this.selectedLang4 === lang4) { this.selectedLang4 = null; }
        });
  }

  ngOnInit(): void {
    this.getAllLangs4();
  }

  onSelect(lang4: Lang4): void {
    this.selectedLang4 = lang4;
  }
  onDeSelect(): void {
    this.selectedLang4 = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/lang4', this.selectedLang4.Id]);
  }
}
