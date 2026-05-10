import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideHttpClient(),
    provideAnimations(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideStore(),
    provideEffects()
]
}).catch((err) => console.error(err));

