import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Bug }                from './bug';
import { BugService }         from './bugs.service';
import { AppService }         from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {
  bugs: Bug[];
  selectedBug: Bug;
  term$ = new Subject<string>();
  
  constructor(
    private bugservice: BugService,
    private router: Router) { 
         this.bugservice.searchBugs(this.term$).subscribe(results =>this.bugs = results);
    }

  searchBugs(term$){
   this.term$.subscribe(term =>this.searchBugs(term$));
 }
  getAllBugs(): void {
    this.bugservice
        .getAllBugs()
        .then(bugs => this.bugs = bugs);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.bugservice.create(name)
      .then(bug => {
        this.bugs.push(bug);
        this.selectedBug = null;
      });
  }

  delete(bug: Bug): void {
    this.bugservice
        .delete(bug.Id)
        .then(() => {
          this.bugs = this.bugs.filter(h => h !== bug);
          if (this.selectedBug === bug) { this.selectedBug = null; }
        });
  }

  ngOnInit(): void {
    this.getAllBugs();
  }

  onSelect(bug: Bug): void {
    this.selectedBug = bug;
  }
    onDeSelect(): void {
    this.selectedBug = null;
  }

  gotoDetail(): void {
    this.router.navigate(['bug', this.selectedBug.Id]);
  }
}
