import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  // A single launch page; the home server story keeps its own page.
  { path: '', component: HomeComponent, title: 'Gopinath P · Software Engineer' },
  {
    path: 'work/home-server',
    loadComponent: () => import('./case-study/gopicraft').then((m) => m.GopicraftStoryComponent),
    title: 'How I built my own private cloud · Gopinath P',
  },
  { path: '**', redirectTo: '' },
];
