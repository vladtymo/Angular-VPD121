import { Component } from '@angular/core';
import { IUser, USERS_MOCK } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: IUser[] = USERS_MOCK;
}
