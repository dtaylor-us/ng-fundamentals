import {Component, OnInit} from '@angular/core';
import {EventService} from './shared';
import {ToastrService} from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from './shared';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <app-event-thumbnail (click)="handleThumbnailClick(event.name)"
                               [event]="event"></app-event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventListComponent implements OnInit {
  events: IEvent[];

  constructor(private eventService: EventService,
              private toasterService: ToastrService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data.events;
  }

  handleThumbnailClick(eventName): void {
    this.toasterService.success(eventName);
  }
}
