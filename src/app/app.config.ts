import { API_URL } from './../../projects/auth/src/lib/tokens/api.token';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { AuthRedirect } from '../../projects/auth/src/lib/components/auth-redirect/auth-redirect';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: API_URL, useValue:'https://exam-app.elevate-bootcamp.cloud/api/auth'},
    {provide: AuthRedirect, useValue:'/diplomas'},
    provideAnimationsAsync(),
     providePrimeNG({
            theme: {
                preset: Aura
            }
        })
    
  ]
};
