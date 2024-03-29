import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';

const routes: Routes = [
    {path: "themes", component: ThemesListComponent},
    {path: ":themeId", component: CurrentThemeComponent},
    {path: "themes/:themeId", component: CurrentThemeComponent},
    
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ThemesRoutingModule {}