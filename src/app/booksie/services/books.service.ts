import { Book } from './../models/Book.interface';
import { User } from 'src/app/auth/models/user.interface';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: Book[] = [];

  get booksGetter(): Book[] {
    return [...this.books];
  }

  set booksSetter(books: Book[]) {
    this.books = books;
  }
  constructor(private http: HttpClient) {}

  getBooks(query: string): Observable<any> {
    return this.http
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=${environment.apiKey}`
      )
      .pipe(
        map((results: any) => {
          this.booksSetter = results.items;
          return results.items;
        })
      );
  }

  getBookById(id: string): Observable<any> {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
  }

  getBookId(book: Book): string {
    return book.id;
  }
}

//AIzaSyA7K9EINdInga9JC4Ukrd3tEbbAYbUD7bY
