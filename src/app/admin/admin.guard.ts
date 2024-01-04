import { Injectable, Input } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminService } from './admin.service';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private AuthService: AuthService,
    private adminService: AdminService,
    private router: Router
  ) { }

  canActivate(): boolean | Promise<boolean> {
    const token = localStorage.getItem('token');

    if (!token || token === null || token === undefined) {
      this.AuthService.logout();
      this.router.navigate(['/login']);
      return false;
    }

    if (token) {
      return this.adminService.getAdminStatus(token).toPromise().then((object: any) => {
        if (object.isAdmin) {
          return true;
        }
        return this.router.navigate(['/login']);
      });
    }
    this.router.navigate(['/login']);
    return false;
  }
}
