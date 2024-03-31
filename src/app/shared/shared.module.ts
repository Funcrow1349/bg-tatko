import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { UsersModule } from '../users/users.module';
import { ThemesModule } from '../themes/themes.module';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    WelcomeScreenComponent, 
    ErrorComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule, 
    UsersModule, 
    ThemesModule, 
    SharedRoutingModule,
    RouterModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    ErrorComponent,
    NotFoundComponent
  ],
})
export class SharedModule {}
