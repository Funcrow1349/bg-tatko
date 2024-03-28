import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { LatestActivityComponent } from './latest-activity/latest-activity.component';
import { DeleteCommentComponent } from './delete-comment/delete-comment.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { RouterModule } from '@angular/router';
import { FormatHourPipe } from './pipes/format-hour.pipe';



@NgModule({
    declarations: [
        ThemesListComponent,
        NewThemeComponent,
        CurrentThemeComponent,
        AddCommentComponent,
        LatestActivityComponent,
        DeleteCommentComponent,
        FormatHourPipe
    ],
    exports: [
        LatestActivityComponent
    ],
    imports: [
        CommonModule,
        ThemesRoutingModule,
        RouterModule,
    ]
})
export class ThemesModule { }
