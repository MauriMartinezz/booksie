import { ValidatorService } from './../../shared/validators/validator.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: [
      '',
      [Validators.required, Validators.pattern(this.vs.passwordPattern)],
    ],
  });
  constructor(private fb: FormBuilder, private vs: ValidatorService) {}

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
}
