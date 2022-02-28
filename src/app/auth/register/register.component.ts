import { ValidatorService } from './../../shared/validators/validator.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', Validators.required, Validators.minLength(4)],
      identification: ['', [Validators.required, Validators.min(1000000)]],
      number: ['', [Validators.pattern(this.vs.numberPattern)]],
      email: [
        '',
        [Validators.required, Validators.pattern(this.vs.emailPattern)],
      ],
      repeatEmail: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(this.vs.passwordPattern),
        ],
      ],
      repeatPassword: ['', [Validators.required]],
      terms: [false, Validators.requiredTrue],
    },
    {
      validators: [
        this.vs.equalLabel('password', 'repeatPassword'),
        this.vs.equalLabel('email', 'repeatEmail'),
      ],
    }
  );
  constructor(private fb: FormBuilder, private vs: ValidatorService) {}

  ngOnInit(): void {}

  validateLabel(label: string): boolean | undefined {
    return (
      this.registerForm.get(label)?.invalid &&
      this.registerForm.get(label)?.touched
    );
  }

  labelTouched(label: string): boolean | undefined {
    return this.registerForm.get(label)?.touched;
  }

  sendForm() {
    console.log('formulario enviado');
    this.registerForm.reset();
  }
}
