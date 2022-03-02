import { Book, VolumeInfo } from './../../models/Book.interface';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/auth/models/user.interface';

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

  public openModal: boolean = true;
  public isLoanConfirm: boolean = false;
  public bid!: string;

  constructor(
    private readonly bs: BooksService,
    private readonly router: ActivatedRoute,
    private readonly fs: FirebaseService,
    private as: AuthService
  ) {}

  ngOnInit(): void {
    this.fetchBook();
    this.checkDisponibility();
  }

  fetchBook() {
    this.router.params.subscribe((m) => {
      this.bs.getBookById(m.id).subscribe((b) => {
        this.book = b;
        this.bid = b.id;
        this.loading = false;
      });
    });
  }

  checkDisponibility() {
    this.fs.loans.subscribe((m) => {});
  }
  confirmLoan(e: any) {
    if (e) {
      this.as.getCurrentUser().then((m) => {
        this.openModal = true;
        this.fs.createLoan(this.bid, m);
      });
    } else {
      false;
    }
  }
  createLoan() {
    if (this.isLoanConfirm) {
    }
  }
}
