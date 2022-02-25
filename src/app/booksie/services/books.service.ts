import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(
      'https://www.googleapis.com/books/v1/volumes?q=javascript:keyes&key=AIzaSyA7K9EINdInga9JC4Ukrd3tEbbAYbUD7bY'
    );
  }
}

//AIzaSyA7K9EINdInga9JC4Ukrd3tEbbAYbUD7bY
