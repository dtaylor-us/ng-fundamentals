import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em {
      float: right;
      color: indianred;
      padding-left: 10px;
    }`]
})
export class LoginComponent {
  userName;
  password;
  loginInvalid = false;


  constructor(private authService: AuthService, private router: Router) {
  }

  login(formData: any): void {
    this.authService.loginUser(formData.userName, formData.password)
      .subscribe(resp => {
        if (!resp) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(['events']);
        }
      });
  }

  cancel(): void {
    this.router.navigate(['events']);
  }
}
