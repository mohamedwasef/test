import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { Home } from './home/home';
import { AvatarShowcaseComponent } from './avatar-showcase/avatar-showcase';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'avatar', component: AvatarShowcaseComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ],
};
