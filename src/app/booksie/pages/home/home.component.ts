import { FirebaseService } from './../../../shared/services/firebase.service';
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
  public query!: string;
  constructor(private bs: BooksService, private fs: FirebaseService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  searchBook(e: string) {
    this.query = e;
    this.bs.getBooks(e).subscribe((book: Book[]) => {
      this.books = book;
    });
  }

  getUsers() {
    this.fs.getUsers().subscribe(console.log);
  }
}
