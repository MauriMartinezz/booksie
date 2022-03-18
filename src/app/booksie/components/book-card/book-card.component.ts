import { Book } from './../../models/Book.interface';
import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { DocumentData } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() books!: Book[] | undefined | DocumentData[] | null;
  @Input() isBookLend: boolean = false;
  results!: number;
  constructor(private readonly fs: FirebaseService) {}

  ngOnInit(): void {}
}
