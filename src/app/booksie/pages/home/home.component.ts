import { ToastsService } from './../../../shared/services/toasts.service';
import { Book } from './../../models/Book.interface';
import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public books!: Book[];
  public query!: string;
  showToast!: boolean;
  constructor(private bs: BooksService, private toastr: ToastsService) {}

  ngOnInit(): void {
    this.shouldToastBeShown();
  }

  searchBook(e: string) {
    this.query = e;
    this.bs.getBooks(e).subscribe(() => {
      this.books = this.bs.booksGetter;
    });
  }

  shouldToastBeShown(): boolean {
    if (this.toastr.showToastSuccessGetter === true) {
      this.toastr.showSuccess('Book lend succesfully', 'Done!');
      console.log(this.toastr.showToastSuccessGetter);

      return true;
    } else {
      this.showToast = false;
      return false;
    }
  }
}
