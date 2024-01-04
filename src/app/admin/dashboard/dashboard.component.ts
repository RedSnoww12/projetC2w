import { Component } from '@angular/core';
import { UserService } from '../../_service/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  lstUser: User[] = [];

  constructor(private userService: UserService,
    private route: Router) { }

  ngOnInit() {
    const token: string = localStorage.getItem('token') || '';
    this.userService.getAllUsers(token).subscribe(
      (data: User[]) => {
        console.log(data);
        this.lstUser = data;
      }
    );
  }

  goToDetail(user: User){
    this.route.navigate(['/user', user._id]);
  }

  deleteUser(user: User){
  }

}
