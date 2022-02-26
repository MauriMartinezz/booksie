import { Book } from './../../models/Book.interface';
import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public books!: Book[];
  constructor(private bs: BooksService) {}

  ngOnInit(): void {}

  searchBook(e: string) {
    this.bs.getBooks(e).subscribe((book: Book[]) => {
      this.books = book;
    });
  }
}
