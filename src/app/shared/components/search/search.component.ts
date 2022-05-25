import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() searchTxtEmit: EventEmitter<string> = new EventEmitter();

  public searchText: string  = '';
  public textModelChanged: Subject<string> = new Subject<string>();
  private textModelChangeSubs: Subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    this.textModelChangeSubs = this.textModelChanged
      .pipe(
        debounceTime(2000),
        distinctUntilChanged()
      )
      .subscribe(newText => {
        this.searchTxtEmit.emit(newText);
      });
  }

  ngOnDestroy() {
    this.textModelChangeSubs.unsubscribe();
  }
}
