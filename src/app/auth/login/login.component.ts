import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormLogin } from 'src/app/types/form-login';
import { User } from '../../models/user.d';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormLogin =  {
    username: '',
    password: ''
  };

  user: User = {
    username: '',
    password: '',
    email: '',
    role: '',
    Adresse: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  }

  onSubmit() {
    this.authService.login(this.form.username, this.form.password).subscribe((response: any ) => {
      if (response.status === 200) {
        this.user = response.user;
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(this.user));
        this.authService.setIsAuthenticated(true);
        this.authService.isAdmin(response.token);
        this.router.navigate(['home']);
    }
   },
  (error) => {
      alert(error.error.message);
      this.authService.setIsAuthenticated(false);
      this.authService.logout();
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    });
  }



}
