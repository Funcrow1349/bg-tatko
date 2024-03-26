import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { emailValidator } from '../utils/email-validator';
import { VALID_EMAIL_DOMAINS } from 'src/app/constants';
import { matchPasswordsValidator } from '../utils/match-passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(VALID_EMAIL_DOMAINS)]],
    passGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPass: ['', [Validators.required]]
    }, {
      validators: [matchPasswordsValidator('password', 'confirmPass')]
    })
  })

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    ) {}

  get passGroup() {
    return this.form.get('passGroup')
  }

  register(): void {
    if (this.form.invalid) {
      return
    }

    const {
      username, 
      email, 
      passGroup : { password, confirmPass } = {},
    } = this.form.value

    this.userService
      .register(username!, email!, password!, confirmPass!)
      .subscribe(() => {
        this.router.navigate(['/'])
      })
  }
  
}
