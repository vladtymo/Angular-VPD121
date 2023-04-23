import { Component } from '@angular/core';
import { IUser, USERS_MOCK } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  inputUser: IUser = {
    id: 1001,
    birthdate: new Date(),
    username: '',
    email: '',
    isAdmin: false
  };

  users: IUser[] = USERS_MOCK;
  isAscending = true;

  sort(): void {
    if (this.isAscending)
      this.users.sort((a, b) => a.username.localeCompare(b.username));
    else
      this.users.sort((a, b) => b.username.localeCompare(a.username));

    this.isAscending = !this.isAscending;
  }

  removeUser(user: IUser): void {
    let index = this.users.indexOf(user); // return -1 if not found
    if (index != -1)
      this.users.splice(index, 1);
  }

  createUser(): void {
    // add new user to the list
    this.users.push({ ...this.inputUser });
  }
}
