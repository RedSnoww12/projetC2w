import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, tap } from 'rxjs';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  isAdmin: boolean = true;

  constructor(private http: HttpClient) { }

  getAdminStatus(token: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/admin`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

}
