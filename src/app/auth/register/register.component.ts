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
      name: ['ejemplo', [Validators.required, Validators.minLength(2)]],
      lastName: ['ejemplo', [Validators.required, Validators.minLength(2)]],
      username: ['ejemplo', Validators.minLength(4)],
      identification: [
        42964859,
        [Validators.required, Validators.min(1000000)],
      ],
      phoneNumber: [500000, [Validators.min(100000)]],
      email: [
        '',
        [Validators.required, Validators.pattern(this.vs.emailPattern)],
      ],
      repeatEmail: ['', [Validators.required]],
      password: ['cheescake00', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['cheescake00', [Validators.required]],
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
    private readonly router: Router,
    private readonly fs: FirebaseService,
    private readonly as: AuthService
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
    try {
      if (this.registerForm.valid) {
        const { email, identification, name, lastName, username, phoneNumber } =
          this.registerForm.value;

        const password: string = this.registerForm.controls['password'].value;

        this.as.register(email, password).then((u) => {
          // uid = u.user?.uid;
          this.fs.createUser({
            identification,
            name,
            lastName,
            email,
            username,
            phoneNumber,
            uid: u.user?.uid,
          } as User);
          this.router.navigate(['/home']);
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
}
