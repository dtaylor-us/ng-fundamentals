import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {EventsAppComponent} from './events-app.component';
import {
  CreateEventComponent,
  CreateSessionComponent,
  DurationPipe,
  EventDetailsComponent,
  EventListComponent,
  EventListResolver, EventResolver,
  EventService,
  EventThumbnailComponent,
  LocationValidator,
  SessionListComponent,
  UpvoteComponent,
  VoterService
} from './events';
import {NavBarComponent} from './nav/navbar.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CollapsibleWellComponent, JQUERY_TOKEN, ModalTriggerDirective, SimpleModalComponent, Toastr, TOASTR_TOKEN} from './common';
import {HttpClientModule} from '@angular/common/http';

const TOASTR_GLOBAL_OBJ_REF = 'toastr';
const JQUERY_GLOBAL_OBJ_REF = '$';
const toastr: Toastr = window[TOASTR_GLOBAL_OBJ_REF];
const jQuery: Toastr = window[JQUERY_GLOBAL_OBJ_REF];

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
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [EventsAppComponent],
  providers: [EventService,
    EventListResolver,
    EventResolver,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQUERY_TOKEN, useValue: jQuery},
    VoterService,
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
