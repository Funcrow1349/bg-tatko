import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileDetails } from 'src/app/types/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit{
  editMode: boolean = false

  profileDetails: ProfileDetails = {
    username: '',
    email: '',
  }

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: [''],
  })

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    const { username, email } = this.userService.user!;

    this.profileDetails = {
      username, 
      email,
    }

    this.form.setValue({
      username,
      email,
    })
  }

  onToggle(): void {
    this.editMode = !this.editMode
  }

  saveProfileHandle(): void {
    if(this.form.invalid) {
      return
    }

    this.profileDetails = this.form.value as ProfileDetails
    const { username, email } = this.profileDetails

    this.userService.updateProfile(username, email).subscribe(() => {
      this.onToggle()
    })
  }

  onCancel(e: Event) {
    e.preventDefault()
    this.onToggle()
  }
}
