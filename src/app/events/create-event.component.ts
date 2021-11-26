import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventService, IEvent} from './shared';

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    em {
      float: right;
      color: indianred;
      padding-left: 10px;
    }
    .error input {
      background-color: #E3C3E5
    }
    .error ::-webkit-input-placeholder,
    .error ::-moz-placeholder,
    .error ::-ms-input-placeholder {
      color: #999
    }
  `]

})
export class CreateEventComponent {
  isDirty = true;
  newEvent: any;

  constructor(private router: Router, private eventService: EventService) {

  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

  saveEvent(formData: any): void {
    this.eventService.saveEvent(formData);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
}
