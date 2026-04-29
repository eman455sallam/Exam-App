import { API_URL } from 'auth';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { AUTH_REDIRECT } from 'auth';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: API_URL, useValue:'https://exam-app.elevate-bootcamp.cloud/api'},
    {provide: AUTH_REDIRECT, useValue:'/diplomas'},
    provideAnimationsAsync(),
     providePrimeNG({
            theme: {
                preset: Aura
            }
        }),
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
    
  ]
};
