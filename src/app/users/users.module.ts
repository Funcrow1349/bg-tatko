import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailDirective } from './validators/email.directive';


@NgModule({
  declarations: [
    RegisterComponent,
    ProfileDetailsComponent,
    LoginComponent,
    EmailDirective
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class UsersModule { }
