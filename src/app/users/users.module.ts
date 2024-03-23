import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';



@NgModule({
  declarations: [
    RegisterComponent,
    ProfileDetailsComponent,
    EditProfileComponent,
    DeleteProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
