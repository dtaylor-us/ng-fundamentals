import {Injectable} from '@angular/core';
import {IUser} from './user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) {
  }

  loginUser(userName: string, password: string): Observable<any> {
    const loginInfo = {
      username: userName,
      password
    };
    const opts = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post('/api/login', loginInfo, opts).pipe(tap(data => {
      console.log(`${data}`);
      this.currentUser = data['user'] as IUser;
    })).pipe(catchError(err => {
      return of(false);
    }));
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(value: IUser): Observable<any> {
    this.currentUser.lastName = value.lastName;
    this.currentUser.firstName = value.firstName;
    const opts = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, opts);
  }

  checkAuthenticationStatus(): void {
    this.http.get('/api/currentIdentity')
      .pipe(tap(data => {
        if (data instanceof Object) {
          this.currentUser = (data as IUser);
        }
      })).subscribe();
  }

  logout(): Observable<any> {
    this.currentUser = undefined;
    const opts = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post('/api/logout', {}, opts);
  }
}
