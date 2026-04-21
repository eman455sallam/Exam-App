import { Routes } from '@angular/router';
import { Diplomas } from './features/diplomas/diplomas';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  { path: 'diplomas', component: Diplomas }
];
