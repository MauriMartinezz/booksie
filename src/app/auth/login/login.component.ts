import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { ValidatorService } from './../../shared/validators/validator.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
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
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  formValid() {
    return this.loginForm.invalid && this.loginForm.touched;
  }

  login() {
    console.log(this.loginForm.valid);
    this.formValid();
    this.loginForm.markAllAsTouched();
    console.log('logueado!');
  }

  googleLogin() {
    this.auth.googleLogin().pipe(tap(() => this.router.navigateByUrl('/home')));
  }
}
