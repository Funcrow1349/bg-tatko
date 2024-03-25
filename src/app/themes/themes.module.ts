import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { LatestActivityComponent } from './latest-activity/latest-activity.component';
import { DeleteCommentComponent } from './delete-comment/delete-comment.component';



@NgModule({
  declarations: [
    ThemesListComponent,
    NewThemeComponent,
    CurrentThemeComponent,
    AddCommentComponent,
    LatestActivityComponent,
    DeleteCommentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LatestActivityComponent
  ]
})
export class ThemesModule { }
