import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { ValidatorService } from './../../shared/validators/validator.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login$!: Observable<any>;

  public loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: [
      '',
      [Validators.required, Validators.pattern(this.vs.passwordPattern)],
    ],
  });
  constructor(
    private readonly fb: FormBuilder,
    private readonly vs: ValidatorService,
    private readonly as: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  formValid() {
    return this.loginForm.invalid && this.loginForm.touched;
  }

  async onLogin() {
    const { username, password } = this.loginForm.value;
    try {
      const user = await this.as.login(
        username.trim().toString(),
        password.trim().toString()
      );

      if (user) {
        this.router.navigate(['/home']);
      } else {
        this.loginForm.markAllAsTouched();
        this.formValid();
      }
    } catch (e) {
      console.log(e);
    }
  }

  googleLogin() {
    this.as.googleLogin().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
