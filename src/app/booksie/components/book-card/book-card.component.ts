import { Book } from './../../models/Book.interface';
import { BooksService } from './../../services/books.service';
import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() books!: Book[] | undefined;
  results!: number;
  constructor(private readonly fs: FirebaseService) {}

  ngOnInit(): void {}
}
