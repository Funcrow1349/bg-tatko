import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, WelcomeScreenComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, WelcomeScreenComponent],
})
export class SharedModule {}
