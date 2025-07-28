import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
<<<<<<< HEAD
    // provideRouter(routes)

    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
=======
    provideRouter(routes),
    provideHttpClient()
>>>>>>> 9631068a4219f7df9bb4e3c02f2b76ca7a9050e4
  ]
};
