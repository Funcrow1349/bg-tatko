import { Component } from '@angular/core';
import { Theme } from 'src/app/types/theme';
import { ThemesService } from '../themes.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/users/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent {
  theme = {} as Theme;

  form = this.fb.group({
    postText: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(
    private fb: FormBuilder,
    private themesService: ThemesService,
    private activeRoute: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['themeId'];

      this.themesService.getTheme(id).subscribe((theme) => {
        this.theme = theme;
      });
    });
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  addComment(id: string): void {
    if (this.form.invalid) {
      return;
    }

    const { postText } = this.form.value;

    this.themesService.createPost(id, postText!).subscribe(() => {
      this.ngOnInit()
    });

  }
}
