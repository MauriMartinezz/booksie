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
  constructor(private bs: BooksService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.shouldToastBeShown();
  }

  searchBook(e: string) {
    this.query = e;
    this.bs.getBooks(e).subscribe((book: Book[]) => {
      this.books = book;
    });
  }

  shouldToastBeShown(): boolean {
    if (this.bs.showToastGetter == true) {
      this.bs.showToastSetter = false;
      this.toastr.success('Book lend succesfully', 'Done!');
      return true;
    } else {
      this.showToast = false;
      return false;
    }
  }
}
