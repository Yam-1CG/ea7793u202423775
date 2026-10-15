import { Routes } from '@angular/router';
import { Layout } from './shared/presentation/components/layout/layout';
import { Home } from './shared/presentation/views/home/home';
import { Reservation} from './adventure-camps/presentation/views/reservation';
import { PageNotFound } from './shared/presentation/views/page-not-found/page-not-found';
export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },

      {
        path: 'home',
        component: Home
      },

      {
        path: 'reservations/new',
        component: Reservation
      }
    ]
  },

  {
    path: '**',
    component: PageNotFound
  }
];
