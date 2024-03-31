import { Component } from '@angular/core';
import { Theme } from 'src/app/types/theme';
import { ThemesService } from '../themes.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/users/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent {
  showPostField: boolean = false;
  editFormVisibility: { [postId: string]: boolean } = {};

  theme = {} as Theme;

  form = this.fb.group({
    postText: ['', [Validators.required, Validators.minLength(10)]],
  });

  editForm = this.fb.group({
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

  get currentUserEmail(): string {
    return this.userService.user?.email || '';
  }

  toggleShowPostField(): void {
    this.showPostField = !this.showPostField
  }

  toggleShowEditPostField(postId: string) {
    this.editFormVisibility[postId] = !this.editFormVisibility[postId];

    if (this.editFormVisibility[postId]) {
      const postToUpdate = this.theme.posts.find(post => post._id === postId);
      if (postToUpdate) {
        this.editForm.get('postText')?.setValue(postToUpdate.text);
      }
    }
  }

  isEditFormVisible(postId: string): boolean {
    return this.editFormVisibility[postId];
  }

  addComment(id: string): void {
    if (this.form.invalid) {
      return;
    }

    const { postText } = this.form.value;

    this.themesService.createPost(id, postText!).subscribe(() => {
      this.ngOnInit()
    });

    this.toggleShowPostField()
    this.form.reset()
  }

  editComment(themeId: string, postId: string) {
    if(this.editForm.invalid) {
      return
    }

    const { postText } = this.editForm.value

    this.themesService.updatePost(themeId, postId, postText!).subscribe(() => {
      this.ngOnInit()
    })

    this.toggleShowEditPostField(postId)
  }

}
