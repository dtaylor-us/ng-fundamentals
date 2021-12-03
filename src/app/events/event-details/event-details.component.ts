import {Component, OnInit} from '@angular/core';
import {EventService, IEvent, ISession} from '../shared';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
      `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }

      .event-image {
        height: 100px;
      }
    `
  ]
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }

  addSessions(): void {
    this.addMode = true;
  }

  saveNewSession(session: ISession): void {
    session.id = Math.max.apply(null, this.event.sessions.map(s => s.id)) + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancel(): void {
    this.addMode = false;
  }
}
