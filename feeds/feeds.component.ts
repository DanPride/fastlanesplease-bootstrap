import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Feed }                from './feed';
import { FeedService }         from './feeds.service';


@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  feeds: Feed[];
  selectedFeed: Feed;

  constructor(
    private feedservice: FeedService,
    private router: Router) { }

  
  getFeeds(): void {
    this.feedservice
        .getFeeds()
        .then(feeds => this.feeds = feeds);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.feedservice.create(name)
      .then(feed => {
        this.feeds.push(feed);
        this.selectedFeed = null;
      });
  }

  delete(feed: Feed): void {
    this.feedservice
        .delete(feed.Id)
        .then(() => {
          this.feeds = this.feeds.filter(h => h !== feed);
          if (this.selectedFeed === feed) { this.selectedFeed = null; }
        });
  }

  ngOnInit(): void {
    this.getFeeds();
  }

  onSelect(feed: Feed): void {
    this.selectedFeed = feed;
  }

  gotoDetail(): void {
    this.router.navigate(['/feed', this.selectedFeed.Id]);
  }
}
