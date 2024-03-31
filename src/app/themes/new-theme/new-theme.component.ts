import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ThemesService } from '../themes.service';
import { NewThemeService } from '../new-theme.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css'],
})
export class NewThemeComponent implements OnDestroy{
  form = this.fb.group({
    themeName: ['', [Validators.required, Validators.minLength(5)]],
    postText: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(
    private fb: FormBuilder,
    private themesService: ThemesService,
    public newThemeService: NewThemeService
  ) {}

  addTheme(): void {
    if (this.form.invalid) {
      return;
    }

    const { themeName, postText } = this.form.value;

    this.themesService.createTheme(themeName!, postText!).subscribe(() => {
      this.newThemeService.toggleNewTheme();
    });
  }

  ngOnDestroy(): void {
    this.newThemeService.toggleNewTheme()
  }

}
