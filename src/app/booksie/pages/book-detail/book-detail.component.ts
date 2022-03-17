import { BookLoan } from './../../models/BookLoan.interface';
import { Book } from './../../models/Book.interface';
import { Component, OnInit, Output } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  providers: [NgbRatingConfig],
})
export class BookDetailComponent implements OnInit {
  @Output() showToast: boolean = false;
  public book!: Book;
  public param: string = '';
  public loading: boolean = true;

  public openModal: boolean = true;
  public bid!: string;

  constructor(
    private readonly bs: BooksService,
    private readonly activatedRouter: ActivatedRoute,
    private readonly router: Router,
    private readonly fs: FirebaseService,
    private readonly as: AuthService
  ) {}

  ngOnInit(): void {
    this.fetchBook();
  }

  fetchBook() {
    this.activatedRouter.params.subscribe((m) => {
      this.bs.getBookById(m.id).subscribe((b) => {
        this.book = b;
        this.bid = b.id;
        this.loading = false;
      });
    });
  }

  confirmBook(e: boolean) {
    let currentUser: string;
    let bookToLoan: BookLoan = {
      id: this.book.id,
      volumeInfo: this.book.volumeInfo,
    };
    this.as.getCurrentUser().then((m: string) => {
      currentUser = m;
      if (e) {
        this.loanBook(currentUser, bookToLoan);
        console.log('Libro prestado exitosamente');
      }
    });
  }
  loanBook(uid: string, book: BookLoan) {
    this.fs.getUserById(uid!).collection('books').doc(book.id).set(book);

    this.fs
      .getUserById(uid!)
      .collection('books')
      .valueChanges()
      .subscribe(() => {
        this.bs.showToastSetter = true;
        this.router.navigate(['home']);
      });
  }
}
