import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from '../types/theme';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor(private http: HttpClient) {}

  getThemes() {
    const { apiUrl } = environment

    return this.http.get<Theme[]>(`${apiUrl}/themes`)
  }

  getPosts() {
    const { apiUrl } = environment
    let url = `${apiUrl}/posts`
    return this.http.get<Post[]>(url)
  }

  getTheme(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }

  createTheme(themeName: string, postText: string) {
    const { apiUrl } = environment;
    const payload = { themeName, postText };

    return this.http.post<Theme>(`/api/themes`, payload);
  }
}
