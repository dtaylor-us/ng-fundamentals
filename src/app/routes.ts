import {EventListComponent} from './events/event-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {Routes} from '@angular/router';
import {CreateEventComponent} from './events/create-event.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';
import {Error404Component} from './events/errors/404.component';
import {EventListResolver} from './events/event-list-revolver.service';

export const appRoutes: Routes = [
  {path: 'events/new', canDeactivate: ['canDeactivateCreateEvent'], component: CreateEventComponent},
  {path: 'events', component: EventListComponent, resolve: {events: EventListResolver}},
  {path: 'events/:id', canActivate: [EventRouteActivator], component: EventDetailsComponent},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
];
