import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {EventsAppComponent} from './events-app.component';
import {
  CreateEventComponent,
  CreateSessionComponent,
  EventDetailsComponent,
  EventListComponent,
  EventListResolver,
  EventRouteActivator,
  EventService,
  EventThumbnailComponent,
  SessionListComponent
} from './events';
import {NavBarComponent} from './nav/navbar.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CollapsibleWellComponent, ToastrService} from './common';
import {DurationPipe} from './events/shared/duration.pipe';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [EventsAppComponent],
  providers: [EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    AuthService
  ]
})
export class AppModule {

}

export function checkDirtyState(component: CreateEventComponent): boolean {
  if (component.isDirty) {
    return window.confirm('You have not saved the event, do you really want to cancel?');
  }
  return true;
}
