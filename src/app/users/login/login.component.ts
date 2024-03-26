import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { VALID_EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from '../utils/email-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  domains = VALID_EMAIL_DOMAINS

  form = this.fb.group({
    email: ['', [Validators.required, emailValidator(VALID_EMAIL_DOMAINS)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  
  })
  
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    ) {}

  login(): void {
    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;

    this.userService.login(email!, password!).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
