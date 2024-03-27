import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserForAuth | undefined
  USER_KEY = "[user]"
  
  userSubscription: Subscription;

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    })
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string
  ) {
    return this.http
      .post<UserForAuth>('/api/register', {
        username,
        email,
        password,
        rePassword
      })
      .pipe(tap((user) => this.user$$.next(user)))
  }

  getUser() {
    return this.http
      .get<UserForAuth>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)))
  }

  get isLogged(): boolean {
    return !!this.user
  }

  updateProfile(username: string, email: string, tel?: string) {
    return this.http
      .put<UserForAuth>('/api/users/profile', {
        username, email, tel,
      })
      .pipe(tap((user) => this.user$$.next(user)))
  }

  login(email: string, password: string) {
    return this.http
      .post<UserForAuth>('/api/login', {email, password})
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .post('/api/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)))
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }

}