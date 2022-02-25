import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BooksieRoutingModule } from './booksie-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, BooksieRoutingModule, HttpClientModule],
})
export class BooksieModule {}
