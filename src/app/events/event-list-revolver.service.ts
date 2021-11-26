import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {EventService} from './shared';
import {map} from 'rxjs/operators';


@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.eventService.getEvents().pipe(map(events => events));
  }

}
