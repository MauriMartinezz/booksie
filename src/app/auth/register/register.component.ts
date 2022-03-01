import { User } from 'src/app/auth/models/user.interface';
import { FirebaseService } from './../../shared/services/firebase.service';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
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
      username: ['', Validators.minLength(4)],
      identification: ['', [Validators.required, Validators.min(1000000)]],
      number: ['', [Validators.pattern(this.vs.numberPattern)]],
      email: [
        '',
        [Validators.required, Validators.pattern(this.vs.emailPattern)],
      ],
      repeatEmail: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
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
  constructor(
    private readonly fb: FormBuilder,
    private readonly vs: ValidatorService,
    private readonly as: AuthService,
    private readonly router: Router,
    private readonly fs: FirebaseService
  ) {}

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

  async onRegister() {
    const { email, password } = this.registerForm.value;

    try {
      const user = await this.as.register(email, password);
      if (this.registerForm.value) {
        this.fs.createUser(this.registerForm.value);
        this.registerForm.reset();
        this.router.navigate(['/home']);
      }
    } catch (e) {
      console.log(e);
    }
  }
}
