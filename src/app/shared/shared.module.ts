import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { UsersModule } from '../users/users.module';
import { ThemesModule } from '../themes/themes.module';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, WelcomeScreenComponent],
  imports: [CommonModule, UsersModule, ThemesModule, RouterModule, SharedRoutingModule],
  exports: [HeaderComponent, FooterComponent, WelcomeScreenComponent],
})
export class SharedModule {}
