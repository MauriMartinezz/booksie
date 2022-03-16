import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BooksieRoutingModule } from './booksie-routing.module';
import { BooksService } from './services/books.service';
import { DescriptionPipe } from './pipes/description.pipe';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DescriptionPipe,
    BookCardComponent,
    HomeComponent,
    BookDetailComponent,
    ProfileComponent,
    ConfirmComponent,
    ProfileComponent,
  ],
  providers: [BooksService],
  imports: [
    CommonModule,
    BooksieRoutingModule,
    HttpClientModule,
    SharedModule,
    NgbModalModule,
  ],
})
export class BooksieModule {}
