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
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    DescriptionPipe,
    BookCardComponent,
    HomeComponent,
    BookDetailComponent,
    RegisterComponent,
  ],
  providers: [BooksService],
  imports: [CommonModule, BooksieRoutingModule, HttpClientModule, SharedModule],
})
export class BooksieModule {}
