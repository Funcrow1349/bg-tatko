import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css'],
})
export class NewThemeComponent {

  form = this.fb.group({
    themeName: ['', [Validators.required, Validators.minLength(5)]],
    postText: ['', [Validators.required, Validators.minLength(10)]],
  })

  constructor(
    private fb: FormBuilder,
    private themesService: ThemesService,
    private router: Router,
    ) {}

  addTheme() {
    if (this.form.invalid) {
      return;
    }

    const { themeName, postText } = this.form.value;
    
    this.themesService.createTheme(themeName!, postText!).subscribe(() => {
      this.router.navigate(['/themes']);
    });
  }


  onCancel(e: Event) {
    e.preventDefault()
    this.router.navigate(['/themes'])
  }
}

