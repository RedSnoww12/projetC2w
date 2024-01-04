import { Component } from '@angular/core';
import { UserService } from '../_service/user.service';
import { User } from '../models/user.d';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  me: User = {} as User;
  token: string = localStorage.getItem('token') || '';
  updatedUser: User = {} as User;

  constructor(private userService: UserService,
    private auth: AuthService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.userService.me(this.token).subscribe({
      next: (me) => {
        this.me = me;
      },
      error: (error) => {
        alert(error.error.message);
        if (error.error.message === 'Token expired'){
          this.auth.logout();
          this.route.navigate(['/login']);
        }
        else {
          this.route.navigate(['/home']);
        }
      }
    });
  }

  save(): void {
    this.updatedUser._id = this.me._id;
    this.userService.updateUser(this.token, this.updatedUser ).subscribe({
      next: (data: any) => {
        console.log(data);
        this.route.navigate(['/me']);
      },
      error: (error: any) => {
        alert(error.error.message);
      }
    });
  }

  changePassword(): void {
    /*this.userService.changePassword(this.token, this.me).subscribe({
      next: () => {
        this.route.navigate(['/me']);
      },
      error: (error: any) => {
        alert(error.error.message);
      }
    });
    */
  }
  toProducts() {
    this.route.navigate(['/products-user', this.me._id]);
  }

}
