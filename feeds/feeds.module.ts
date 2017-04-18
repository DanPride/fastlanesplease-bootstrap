import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FeedsComponent } from './feeds.component';
import { FeedService } from './feeds.service';
import { FeedsRoutingModule } from './feeds-routing.module';
import { FeedDetailComponent } from './feed.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FeedsRoutingModule
  ],
  declarations: [FeedsComponent, FeedDetailComponent],
  providers:[FeedService]
})
export class FeedsModule { }
