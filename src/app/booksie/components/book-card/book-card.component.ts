import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  book: any;
  constructor(private bs: BooksService) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks() {
    this.bs.getBooks().subscribe(console.log);
  }
}
