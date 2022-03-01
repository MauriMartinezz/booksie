import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService],
})
export class NavbarComponent {
  public user$: Observable<any> = this.authService.afAuth.user;

  constructor(private authService: AuthService, private router: Router) {}

  // logoutGoogle() {
  //   this.authService
  //     .logoutGoogle()
  //     .subscribe(() => this.router.navigateByUrl('/auth/login'));
  // }

  async logout() {
    try {
      this.authService.logout();
      this.router.navigate(['/auth/login']);
    } catch (e) {
      console.log(e);
    }
  }
}
