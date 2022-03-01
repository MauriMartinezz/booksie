import { Observable } from 'rxjs';
import { subscribeOn, tap } from 'rxjs/operators';

import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$ = this.authService.user$;
  logout$!: any;
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    this.logout$ = this.authService.logout();
  }
}
