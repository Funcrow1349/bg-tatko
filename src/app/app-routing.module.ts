import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './shared/welcome-screen/welcome-screen.component';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/"},
  {path: "", component: WelcomeScreenComponent},
  {path: 'error', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
