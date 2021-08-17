import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  email = 'test';
  accountsList: string[] = [];
  user : UserModel | undefined ;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUserInfo(this.email).subscribe(data => {
      if (data) {
        this.userService.currentUser.next(data);
        this.user = data;
      }
    });
  }

}
