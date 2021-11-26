import {Injectable} from '@angular/core';
import {IUser} from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName: 'dtaylor-us',
      firstName: 'Derek',
      lastName: 'Taylor'
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(value: IUser): void {
    this.currentUser.lastName = value.lastName;
    this.currentUser.firstName = value.firstName;
  }
}
