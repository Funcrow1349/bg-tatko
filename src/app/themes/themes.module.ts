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
import { FormatDatePipe } from './pipes/format-date.pipe';
import { ForumStatsComponent } from './forum-stats/forum-stats.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ThemesListComponent,
        NewThemeComponent,
        CurrentThemeComponent,
        AddCommentComponent,
        LatestActivityComponent,
        DeleteCommentComponent,
        FormatHourPipe,
        FormatDatePipe,
        ForumStatsComponent,
    ],
    exports: [
        LatestActivityComponent,
        ForumStatsComponent
    ],
    imports: [
        CommonModule,
        ThemesRoutingModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
export class ThemesModule { }
