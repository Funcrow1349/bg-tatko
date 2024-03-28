import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/types/theme';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-latest-activity',
  templateUrl: './latest-activity.component.html',
  styleUrls: ['./latest-activity.component.css']
})
export class LatestActivityComponent implements OnInit{
  themes: Theme[] = []

  constructor (private themesService: ThemesService) {}

  ngOnInit(): void {
    this.loadThemes();
  }

  loadThemes(): void {
    this.themesService.getThemes().subscribe(themes => {
      this.themes = themes.sort((a, b) => {
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      }).slice(0,3);
    });
  }
}
