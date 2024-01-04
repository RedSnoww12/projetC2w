import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    username: '',
    password: '',
    email: '',
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
    this.authService.register(this.user).subscribe({
      next: (response: any) => {
        if (response.status === 201) {
          this.router.navigate(['login']);
        }
      },
      error: (error) => {
        alert(error.error.message);
      }
    });

  }

}
