import { Component, Input } from '@angular/core';
import { IUser } from '../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  @Input() // allows put a value of this parameter from the parent component
  user: IUser = {
    id: 0,
    username: '',
    email: '',
    birthdate: new Date(),
    address: '',
    isAdmin: false
  };
}
