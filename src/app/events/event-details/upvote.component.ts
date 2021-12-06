import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'upvote',
  template: `
    <div class="votingWidgetContainer pointable"
         (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-adverse voting-count">
          <div>{{count}}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  @Input() count: number;

  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'white';
  }

  iconColor: string;

  @Output() vote = new EventEmitter();

  onClick(): void {
    this.vote.emit({});
  }
}
