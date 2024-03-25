import { Component } from '@angular/core';
import { VALID_EMAIL_DOMAINS } from 'src/app/constants';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  domains = VALID_EMAIL_DOMAINS;
  constructor(private userService: UserService, private router: Router) {}

  register(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { username, email, password, rePassword } = form.value;

    this.userService.register(username, email, password, rePassword).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
