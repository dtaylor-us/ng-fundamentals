import {Component} from '@angular/core';

@Component({
  selector: 'event-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <app-event-thumbnail #thumbnail [event]="event1"></app-event-thumbnail>
    </div>
  `
})
export class EventListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '10/30/2021',
    time: '10:30 AM',
    price: 500.00,
    imageUrl: '/assets/images/anularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };

}
