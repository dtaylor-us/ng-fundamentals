import {Component, Input} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'collapsible-well',
  template: `
    <div class="well pointable" (click)="toggleContent()">
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content select="[well-body]" *ngIf="visible"></ng-content>
    </div>
  `
})
export class CollapsibleWellComponent {
  @Input() title: string;
  visible = true;

  toggleContent(): void {
    this.visible = !this.visible;
  }
}
