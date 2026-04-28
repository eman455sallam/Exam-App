import { Routes } from '@angular/router';
import { ResetPassword } from './features/auth/components/reset-password/reset-password';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  { path: 'diplomas', 
    loadChildren:() => import('./features/diplomas/diplomas.routes').then(m => m.DIPLOMAS_ROUTES)
   },
  
  
];
