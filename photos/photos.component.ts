import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Photo }                from './photo';
import { PhotoService }         from './photos.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Photo[];
  selectedPhoto: Photo;

  constructor(
    private photoservice: PhotoService,
    private router: Router) { }

  
  getPhotos(): void {
    this.photoservice
        .getPhotos()
        .then(photos => this.photos = photos);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.photoservice.create(name)
      .then(photo => {
        this.photos.push(photo);
        this.selectedPhoto = null;
      });
  }

  delete(photo: Photo): void {
    this.photoservice
        .delete(photo.Id)
        .then(() => {
          this.photos = this.photos.filter(h => h !== photo);
          if (this.selectedPhoto === photo) { this.selectedPhoto = null; }
        });
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  onSelect(photo: Photo): void {
    this.selectedPhoto = photo;
  }

  gotoDetail(): void {
    this.router.navigate(['/photo', this.selectedPhoto.Id]);
  }
}
