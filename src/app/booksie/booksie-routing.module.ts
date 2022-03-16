import { ProfileComponent } from './pages/profile/profile.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'book',
    children: [
      {
        path: ':id',
        component: BookDetailComponent,
      },
    ],
  },
  {
    path: 'user/:id',
    component: ProfileComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksieRoutingModule {}
