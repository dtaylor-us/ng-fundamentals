import {Routes} from '@angular/router';
import {
  CreateEventComponent,
  CreateSessionComponent,
  EventDetailsComponent,
  EventListComponent,
  EventListResolver,
  EventResolver,
} from './events';
import {Error404Component} from './errors/404.component';


export const appRoutes: Routes = [
  {path: 'events/new', canDeactivate: ['canDeactivateCreateEvent'], component: CreateEventComponent},
  {path: 'events', component: EventListComponent, resolve: {events: EventListResolver}},
  {path: 'events/session/new', component: CreateSessionComponent},
  {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
];
