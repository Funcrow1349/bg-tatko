import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../themes.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit{
  themes: Theme[] = []
  currentPage: number = 1;
  themesPerPage: number = 5;
  newThemeField: boolean = false;

  constructor (private themesService: ThemesService, private userService: UserService) {}

  ngOnInit(): void {
    this.loadThemes();
  }

  loadThemes(): void {
    this.themesService.getThemes().subscribe(themes => {
      // Sort themes by updatedAt in ascending order
      this.themes = themes.sort((a, b) => {
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      });
    });
  }

  getPaginatedThemes(): Theme[] {
    const startIndex = (this.currentPage - 1) * this.themesPerPage;
    const endIndex = startIndex + this.themesPerPage;
    return this.themes.slice(startIndex, endIndex);
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  getTotalPages(): number {
    return Math.ceil(this.themes.length / this.themesPerPage);
  }

  toggleNewTheme(): void {
    this.newThemeField = !this.newThemeField
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
}
