import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Place }                from './place';
import { PlaceService }         from './places.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places: Place[];
  selectedPlace: Place;
  term$ = new Subject<string>();
  
  constructor(
    private placeservice: PlaceService,
    private router: Router) { 
      this.placeservice.searchPlaces(this.term$).subscribe(results =>this.places = results);
    }
searchPlaces(term$){
    this.term$.subscribe(term => this.searchPlaces(term$));
}
getAllPlaces(): void { 
    this.placeservice
        .getAllPlaces()
        .then(places => this.places = places);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.placeservice.create(name)
      .then(place => {
        this.places.push(place);
        this.selectedPlace = null;
      });
  }
  delete(place: Place): void {
    this.placeservice
        .delete(place.Id)
        .then(() => {
          this.places = this.places.filter(h => h !== place);
          if (this.selectedPlace === place) { this.selectedPlace = null; }
        });
  }
  ngOnInit(): void {
    this.getAllPlaces();
  }
  onSelect(place: Place): void {
    this.selectedPlace = place;
  }
  onDeSelect(): void{
    this.selectedPlace = null;
  }
  gotoDetail(): void {
    this.router.navigate(['/place', this.selectedPlace.Id]);
  }
}
