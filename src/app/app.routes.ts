import { Routes } from '@angular/router';
import { Events } from './pages/events/events';
import { Nqfd } from './pages/nqfd/nqfd';

export const routes: Routes = [
  { path: '', component: Events },
  { path: 'nqfd', component: Nqfd }
];
