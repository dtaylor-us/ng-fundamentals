import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import {EventListComponent} from './events/event-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from './events/nav/navbar.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
