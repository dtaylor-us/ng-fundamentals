import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {EventService, IEvent} from './shared';
import {Observable} from 'rxjs';


@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {
  }

  resolve(): Observable<IEvent[]> {
    return this.eventService.getEvents();
  }

}
