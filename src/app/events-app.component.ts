import {Component, OnInit} from '@angular/core';
import {AuthService} from './user/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.checkAuthenticationStatus();
  }
}
