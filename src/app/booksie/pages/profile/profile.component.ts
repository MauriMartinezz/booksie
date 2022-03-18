import { FirebaseService } from 'src/app/shared/services/firebase.service';

import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { DocumentData } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$ = this.authService.user$;
  user!: Observable<any>;

  books!: Observable<DocumentData[]>;

  loading: boolean = true;
  logout$!: any;
  constructor(
    private readonly authService: AuthService,
    private firebase: FirebaseService
  ) {}

  ngOnInit(): void {
    this.fetchDataUser();
  }

  fetchDataUser() {
    this.loading = true;
    this.authService
      .getCurrentUser()
      .then((id: string) => {
        this.books = this.firebase.getUsersBooksByUserId(id);
        this.user = this.firebase.fetchUserData(id);
      })
      .finally(() => (this.loading = false));
  }

  logout() {
    this.logout$ = this.authService.logout();
  }
}
