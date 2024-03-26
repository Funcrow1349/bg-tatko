import { ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  passwordControlName: string,
  confirmPassControlName: string
): ValidatorFn {
  return (control) => {
    const passwordFormControl = control.get(passwordControlName);
    const confirmPassFormControl = control.get(confirmPassControlName);
    const areMatching =
      passwordFormControl?.value == confirmPassFormControl?.value;

    return areMatching ? null : { matchPasswordsValidator: true };
  };
}