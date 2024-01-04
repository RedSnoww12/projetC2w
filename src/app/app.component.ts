import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logout() {
    this.authService.logout();
    this.authService._isAdmin = false;
    this.router.navigate(['login']);
  }

  login() {
    this.router.navigate(['login']);
  }

  register() {
    this.router.navigate(['register']);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  isAdmin() {
    return this.authService._isAdmin;
  }

  products() {
    this.router.navigate(['products']);
  }

  profile() {
    this.router.navigate(['me']);
  }

  dashboard() {
    this.router.navigate(['dashboard']);
  }
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
 }

}
