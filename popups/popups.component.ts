import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Popup }                from './popup';
import { PopupService }         from './popups.service';
import { AppService }           from '../app.service';

import { Subject }              from 'rxjs/Subject';
import { Observer }             from 'rxjs/Observer';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
export class PopupsComponent implements OnInit {
  popups:  Popup[];
  selectedPopup:  Popup;
  term$ = new Subject<string>();

  constructor(
    private popupservice:  PopupService,
    private router: Router,
    private appservice: AppService) { }

  
  getAllPopups(): void {
    this.popupservice
        .getAllPopups()
        .then(popups => this.popups = popups);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.popupservice.create(name)
      .then(popup => {
        this.popups.push(popup);
        this.selectedPopup = null;
      });
  }

  delete(popup: Popup): void {
    this.popupservice
        .delete(popup.Id)
        .then(() => {
          this.popups = this.popups.filter(h => h !== popup);
          if (this.selectedPopup === popup) { this.selectedPopup = null; }
        });
  }

  ngOnInit(): void {
    this.getAllPopups();
  }

  onSelect(popup:  Popup): void {
    this.selectedPopup = popup;
  }
  onDeSelect(): void {
    this.selectedPopup = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/popup', this.selectedPopup.Id]);
  }
}
