import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToFinishedList,
  getReadingList,
  removeFromReadingList,
} from '@tmo/books/data-access';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss'],
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  addTofinishedList(item) {
    this.store.dispatch(addToFinishedList({ item }));
    this.readingList$ = this.store.select(getReadingList);
  }

  formatDate(date: void | string) {
    return date
      ? new Intl.DateTimeFormat('en-US').format(new Date(date))
      : undefined;
  }
}
