import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  // Single-page site: Home composes every section and navigation is hash-based.
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
];
