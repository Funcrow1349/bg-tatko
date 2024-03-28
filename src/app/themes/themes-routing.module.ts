import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { NewThemeComponent } from './new-theme/new-theme.component';

const routes: Routes = [
    {path: "themes", component: ThemesListComponent},
    {path: "themes/:themeId", component: CurrentThemeComponent},
    {path: "add-theme", component: NewThemeComponent}
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ThemesRoutingModule {}