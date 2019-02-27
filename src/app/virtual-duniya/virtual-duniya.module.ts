import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedsComponent } from './components/feeds/feeds.component';
import { FeedComponent } from './components/feed/feed.component';

@NgModule({
  declarations: [FeedsComponent, FeedComponent],
  imports: [CommonModule],
  exports: [FeedsComponent, FeedComponent]
})
export class VirtualDuniyaModule {}
