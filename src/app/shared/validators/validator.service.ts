import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public numberPattern: string =
    '/^(?:(?:00)?549?)?0?(?:11|[2368]d)(?:(?=d{0,2}15)d{2})??d{8}$/';
  public passwordPattern: string =
    '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$';

  constructor() {}

  equalLabel(label1: string, label2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const value1 = formGroup.get(label1)?.value;
      const value2 = formGroup.get(label2)?.value;

      if (value1 != value2) {
        formGroup.get(label2)?.setErrors({ labelMatch: false });
        return { labelMatch: false };
      }

      formGroup.get(label2)?.setErrors(null);
      return null;
    };
  }
}
