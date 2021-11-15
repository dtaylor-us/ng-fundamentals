import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>name: {{event?.name}}</h2>
      <div>date: {{event?.date}}</div>
      <div>time: {{event?.time}}</div>
      <div [ngSwitch]="event?.time">
        <span>EarlyStart</span>
        <span>Late Start</span>
        <span>Normal Start</span>

      </div>
      <div>price: \${{event?.price}}</div>
      <div [hidden]="!event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span>&nbsp;</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.url">Online Url: {{event?.url}}</div>
    </div>
  `,
  styles: [`
    .thumbnail {
      min-height: 210px;
    }
    .pad-left {
      margin-left: 10px;
    }
    .well div { color: #bbb;}
  `]

})
export class EventThumbnailComponent {
  @Input() event: any;
}
