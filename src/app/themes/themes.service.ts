import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theme } from '../types/theme';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor(private http: HttpClient) {}

  getThemes() {
    return this.http.get<Theme[]>('/api/themes')
  }

  getPosts() {
    return this.http.get<Post[]>('/api/posts')
  }

  getTheme(id: string) {
    return this.http.get<Theme>(`/api/themes/${id}`);
  }

  createTheme(themeName: string, postText: string) {
    return this.http.post<Theme>(`/api/themes`, { themeName, postText });
  }

  createPost(id: string, postText: string) {
    return this.http.post<Post>(`/api/themes/${id}`, { postText })
  }

  updatePost(themeId: string, postId: string, postText: string) {
    return this.http.put<Post>(`/api/themes/${themeId}/posts/${postId}`, {postText})
  }

  deletePost(themeId: string, postId: string) {
    return this.http.delete(`/api/themes/${themeId}/posts/${postId}`)
  }

}
