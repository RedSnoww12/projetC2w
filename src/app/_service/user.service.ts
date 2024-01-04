import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.d';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  me(token: string): Observable<User>{
    return this.http.get<User>(`${environment.apiUrl}/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  updateUser(token: string, user: User): any{
    return this.http.put(`${environment.apiUrl}/user/${user._id}`, user, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  getAllUsers(token: string): Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiUrl}/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }});
  }

  getUserById(id: number, token: string): Observable<User>{
    return this.http.get<User>(`${environment.apiUrl}/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

}
