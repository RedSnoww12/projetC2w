import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _isAuthenticated = false;
  _isAdmin = false;

  constructor(private httpClient: HttpClient) {
    this._isAuthenticated = this.isLoggedIn();
    this.isAdmin(localStorage.getItem('token') || '');
  }

  login(username: string, password: string) {
    return this.httpClient.post(`${environment.apiUrl}/login`, { username, password });
  }

  register(user: User) {
    return this.httpClient.post(`${environment.apiUrl}/register`, user);
  }

  setIsAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  isAdmin(token: string): void {
    this.httpClient.get<any>(`${environment.apiUrl}/admin`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe((object: any) => {
      this._isAdmin = object.isAdmin;

    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this._isAuthenticated = false;
  }
}
