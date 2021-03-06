import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { User }                from './user';
import { UserService }         from './users.service';
import {AppService }          from '../app.service';

import { Comment }  from '../comments/comment';
import { CommentService }         from '../comments/comments.service';

import { Drive }  from '../drives/drive';
import { DriveService }         from '../drives/drives.service';

import { Ride }  from '../rides/ride';
import { RideService }         from '../rides/rides.service';

import { Run }  from '../runs/run';
import { RunService }         from '../runs/runs.service';

import { Place }  from '../places/place';
import { PlaceService }         from '../places/places.service';

import { Output }  from '../outputs/output';
import { OutputService }         from '../outputs/outputs.service';

import { Location }               from '@angular/common';
@Component({
  selector: 'usersummary',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
selectedUser:User;  
user:User;
users:User[];
runs:Run[];
drives:Drive[];
rides:Ride[];
places:Place[];
comments:Comment[];
outputs:Output[];


  constructor(
    private runservice:RunService,
    private userservice:UserService,
    private driveservice:DriveService,
    private rideservice:RideService, 
    private outputservice:OutputService, 
    private placeservice:PlaceService, 
    private commentservice:CommentService,
    private router: Router,
    private appservice: AppService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getAllUsers(): void {
    this.userservice
        .getAllUsers()
        .then(users => this.users = users);
  }
    getAllRuns(): void {
    this.runservice
        .getAllRuns()
        .then(runs => this.runs = runs);
  }
  getAllPlaces(): void {
    this.placeservice
        .getAllPlaces()
        .then(places => this.places = places);
  }
      getAllRides(): void {
    this.rideservice.getAllRides()
        .then(rides => this.rides = rides);
  }
  getAllComments(): void {
    this.commentservice.getAllComments()
        .then(comments => this.comments = comments);
  }
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.userservice.getUser(+params['id']))
      .subscribe(user => this.user = user[0] );
      this.route.params
      .switchMap((params: Params) => this.driveservice.getDrivePid(+params['id'])).subscribe(drives => this.drives = drives);
      this.route.params
      .switchMap((params: Params) => this.rideservice.getRidePid(+params['id'])).subscribe(rides => this.rides = rides);
          this.route.params
      .switchMap((params: Params) => this.placeservice.getPlacePid(+params['id'])).subscribe(places => this.places = places);
          this.route.params
      .switchMap((params: Params) => this.runservice.getRunPid(+params['id'])).subscribe(runs => this.runs = runs);
          this.route.params
      .switchMap((params: Params) => this.commentservice.getCommentPid(+params['id'])).subscribe(comments => this.comments = comments);
          this.route.params
      .switchMap((params: Params) => this.outputservice.getOutputPid(+params['id'])).subscribe(outputs => this.outputs = outputs);

}
  goBack(): void {
    this.location.back();
  }

}
