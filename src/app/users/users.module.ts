import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmailDirective } from './validators/email.directive';


@NgModule({
  declarations: [
    RegisterComponent,
    ProfileDetailsComponent,
    EditProfileComponent,
    LoginComponent,
    EmailDirective
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class UsersModule { }
