import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/types/post';
import { Theme } from 'src/app/types/theme';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-forum-stats',
  templateUrl: './forum-stats.component.html',
  styleUrls: ['./forum-stats.component.css']
})
export class ForumStatsComponent implements OnInit {
  themes: Theme[] = []
  posts: Post[] = []
  
  constructor (private themesService: ThemesService) {}
  
  ngOnInit(): void {
    this.themesService.getThemes().subscribe((themes) => {
      return this.themes = themes
    })
    this.themesService.getPosts().subscribe((posts) => {
      return this.posts = posts
    })
  }
}
