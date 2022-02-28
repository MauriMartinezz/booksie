import { Observable } from 'rxjs';
import { Book, VolumeInfo } from './../../models/Book.interface';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  providers: [NgbRatingConfig],
})
export class BookDetailComponent implements OnInit {
  public book!: Book;
  public param: string = '';
  public loading: boolean = true;
  constructor(private bs: BooksService, private router: ActivatedRoute) {
    this.fetchBook();
  }

  ngOnInit(): void {}

  fetchBook() {
    this.router.params.subscribe((m) => {
      this.bs.getBookById(m.id).subscribe((b) => {
        this.book = b;
        this.loading = false;
        console.log(this.book);
      });
    });
  }
}
