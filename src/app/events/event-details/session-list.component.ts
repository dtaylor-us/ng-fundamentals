import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from '../shared';
import {AuthService} from '../../user/auth.service';
import {VoterService} from '../shared/voter.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() sessions: ISession[];
  visibleSessions: ISession[] = [];

  constructor(private authService: AuthService, private voterService: VoterService) {

  }

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByName) : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  private filterSessions(filter): void {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLowerCase() === filter;
      });
    }
  }

  toggleVote(session: ISession): void {
    console.log('CLICKED!!');
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.authService.currentUser.userName);
    } else {
      this.voterService.addVoter(session, this.authService.currentUser.userName);
    }
    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
  }
}

function sortByName(session1: ISession, session2: ISession): number {
  if (session1 > session2) {
    return 1;
  } else if (session1 === session2) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDesc(session1: ISession, session2: ISession): number {
  return session2.voters.length - session1.voters.length;
}
