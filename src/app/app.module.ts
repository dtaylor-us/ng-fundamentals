import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {EventsAppComponent} from './events-app.component';
import {
  CreateEventComponent,
  CreateSessionComponent, DurationPipe,
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
import {CollapsibleWellComponent, Toastr, TOASTR_TOKEN} from './common';

const TOASTR_GLOBAL_OBJ_REF = 'toastr';
const toastr: Toastr = window[TOASTR_GLOBAL_OBJ_REF];

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
    EventRouteActivator,
    EventListResolver,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    {provide: TOASTR_TOKEN, useValue: toastr},
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
