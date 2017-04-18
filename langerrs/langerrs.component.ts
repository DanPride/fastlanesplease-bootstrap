import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Langerr }                from './langerr';
import { LangerrService }         from './langerrs.service';
import { AppService }             from '../app.service';

import { Observer }               from 'rxjs/Observer';
import { Subject }                from 'rxjs/Subject';


@Component({
  selector: 'app-langerrs',
  templateUrl: './langerrs.component.html',
  styleUrls: ['./langerrs.component.css']
})
export class LangerrsComponent implements OnInit {
  langerrs: Langerr[];
  selectedLangerr: Langerr;
  term$ = new Subject<string>();

  constructor(
    private langerrservice: LangerrService,
    private router: Router,
    private appservice: AppService) {
      this.langerrservice.searchLangerrs(this.term$).subscribe(results => this.langerrs = results);
    }
  getAllLangerrs(): void {
    this.langerrservice
        .getAllLangerrs()
        .then(langerrs => this.langerrs = langerrs);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.langerrservice.create(name)
      .then(langerr => {
        this.langerrs.push(langerr);
        this.selectedLangerr = null;
      });
  }

  delete(langerr: Langerr): void {
    this.langerrservice
        .delete(langerr.Id)
        .then(() => {
          this.langerrs = this.langerrs.filter(h => h !== langerr);
          if (this.selectedLangerr=== langerr) { this.selectedLangerr = null; }
        });
  }

  ngOnInit(): void {
    this.getAllLangerrs();
  }

  onSelect(langerr: Langerr): void {
    this.selectedLangerr = langerr;
  }


  onDeSelect(): void {
    this.selectedLangerr = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/langerr', this.selectedLangerr.Id]);
  }
}
