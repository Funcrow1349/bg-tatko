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
  deletePromptVisibility: { [postId: string]: boolean } = {};
  currentPage: number = 1;
  commentsPerPage: number = 10;

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

  getPaginatedComments(): Post[] {
    const startIndex = (this.currentPage - 1) * this.commentsPerPage;
    const endIndex = startIndex + this.commentsPerPage;
    return this.theme.posts.slice(startIndex, endIndex);
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  getTotalPages(): number {
    return Math.ceil(this.theme.posts.length / this.commentsPerPage);
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

  toggleEditFormVisibility(postId: string) {
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

  toggleDeletePromptVisibility(postId: string) {
    this.deletePromptVisibility[postId] = !this.deletePromptVisibility[postId]
  }

  isDeletePromptVisible(postId: string) {
    return this.deletePromptVisibility[postId]
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

    this.toggleEditFormVisibility(postId)
  }

  deleteComment(themeId: string, postId: string) {
    this.themesService.deletePost(themeId, postId).subscribe(() => {
      this.ngOnInit()
    })
  }

}
