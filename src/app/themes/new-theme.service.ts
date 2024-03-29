import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewThemeService {
  newThemeField: boolean = false;

  toggleNewTheme(): void {
    this.newThemeField = !this.newThemeField
  }

  constructor() {}
}
