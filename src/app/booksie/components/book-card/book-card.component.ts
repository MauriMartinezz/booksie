import { Book } from './../../models/Book.interface';
import { BooksService } from './../../services/books.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() books!: Book[] | undefined;
  // books!: Book[];
  results!: number;
  constructor() {
    // this.fetchBooks();
  }

  ngOnInit(): void {}

  // fetchBooks() {
  //   this.bs.getBooks('javascript').subscribe((m) => {
  //     this.books = m.items;
  //     this.results = m.totalItems;
  //     console.log(this.books);
  //     // console.log(this.results);
  //   });
}
