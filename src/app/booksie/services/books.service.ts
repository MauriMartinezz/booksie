import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks(query: string): Observable<any> {
    return this.http
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=${environment.apiKey}`
      )
      .pipe(
        map((results: any) => {
          return results.items;
        })
      );
  }
}

//AIzaSyA7K9EINdInga9JC4Ukrd3tEbbAYbUD7bY
