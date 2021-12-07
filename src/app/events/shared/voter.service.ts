import {ISession} from './event.model';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable()
export class VoterService {

  constructor(private http: HttpClient) {
  }

  deleteVoter(eventId: number, session: ISession, userName: string): void {
    session.voters = session.voters.filter(voter => voter !== userName);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
    this.http.delete(url)
      .pipe(catchError(this.handleError('deleteVoter')))
      .subscribe();
  }

  addVoter(eventId: number, session: ISession, userName: string): void {
    session.voters.push(userName);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
    this.http.post(url, {}, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(catchError(this.handleError('addVoter')))
      .subscribe();
  }

  userHasVoted(session: ISession, userName: string): boolean {
    return session.voters.some(voter => voter === userName);
  }

  handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }

}
