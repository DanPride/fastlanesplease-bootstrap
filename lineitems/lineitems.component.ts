import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Lineitem }                from './lineitem';
import { LineitemService }         from './lineitems.service';


@Component({
  selector: 'app-lineitems',
  templateUrl: './lineitems.component.html',
  styleUrls: ['./lineitems.component.css']
})
export class LineitemsComponent implements OnInit {
  lineitems: Lineitem[];
  selectedLineitem: Lineitem;

  constructor(
    private lineitemservice: LineitemService,
    private router: Router) { }

  
  getLineitems(): void {
    this.lineitemservice
        .getLineitems()
        .then(lineitems => this.lineitems = lineitems);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.lineitemservice.create(name)
      .then(lineitem => {
        this.lineitems.push(lineitem);
        this.selectedLineitem = null;
      });
  }

  delete(lineitem: Lineitem): void {
    this.lineitemservice
        .delete(lineitem.Id)
        .then(() => {
          this.lineitems = this.lineitems.filter(h => h !== lineitem);
          if (this.selectedLineitem === lineitem) { this.selectedLineitem = null; }
        });
  }

  ngOnInit(): void {
    this.getLineitems();
  }

  onSelect(lineitem: Lineitem): void {
    this.selectedLineitem = lineitem;
  }

  gotoDetail(): void {
    this.router.navigate(['/lineitem', this.selectedLineitem.Id]);
  }
}
