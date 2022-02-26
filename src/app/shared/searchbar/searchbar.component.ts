import { BooksService } from './../../booksie/services/books.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  query: string = '';

  constructor(private bs: BooksService) {}

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        this.onDebounce.emit(value);
      });
  }

  keypress() {
    this.debouncer.next(this.query);
  }

  search() {
    this.onEnter.emit(this.query);
  }
}
