import { ToastsService } from './../../../shared/services/toasts.service';
import { ConfirmBookReturn } from './../../models/BookLoan.interface';
import { Book } from './../../models/Book.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DocumentData } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() books!: Book[] | undefined | DocumentData[] | null;
  @Input() isBookLend: boolean = false;
  @Output() returnBook = new EventEmitter<ConfirmBookReturn>();
  constructor(private toastr: ToastsService) {}

  wantToReturnBook(bid: string, status: boolean) {
    if (status) {
      this.toastr.showToastSuccessSetter = false;
      this.returnBook.emit({ bid, status });
    }
  }
}
