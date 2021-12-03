import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from '../shared';

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
