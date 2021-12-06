import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';
import {EventService, IFoundSession, ISession} from '../events/shared';


@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styles: [`
    .nav.navbar-nav {
      font-size: 15px;
    }

    #searchForm {
      margin-right: 100px;
    }

    @media (max-width: 1200px) {
      #searchForm {
        display: none;
      }
    }

    li > a.active {
      color: orange;
    }
  `]
})
export class NavBarComponent {
  searchTerm = '';
  foundSessions: ISession[];

  constructor(private authService: AuthService, private eventService: EventService) {
  }
  isAuthenticated(): boolean {
   return this.authService.isAuthenticated();
  }
  searchSessions(searchTerm: string): void {
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
      }
    );
  }
}
