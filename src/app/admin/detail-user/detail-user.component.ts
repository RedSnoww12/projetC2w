import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../_service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent {

  user: User = {} as User;

  constructor(private userService: UserService,
  private router: ActivatedRoute)
  { }

  ngOnInit(): void {
    const token: string | null = localStorage.getItem('token');
    const id: number = this.router.snapshot.params['id'];

    if (token) {
      this.userService.getUserById(id, token).subscribe({
        next: (user) => {
          this.user = user;
        },
        error: (error) => {
          alert(error.error.message);
        }
      });
    }
  }

  goBack(){
    window.history.back();
  }

}
