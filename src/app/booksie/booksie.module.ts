import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BooksieRoutingModule } from './booksie-routing.module';
import { BooksService } from './services/books.service';
import { DescriptionPipe } from './pipes/description.pipe';
import { BookCardComponent } from './components/book-card/book-card.component';

@NgModule({
  declarations: [DescriptionPipe, BookCardComponent, HomeComponent],
  providers: [BooksService],
  imports: [CommonModule, BooksieRoutingModule, HttpClientModule],
})
export class BooksieModule {}
