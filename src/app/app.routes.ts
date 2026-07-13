import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  // Home composes every section; in-page navigation is hash-based.
  { path: '', component: HomeComponent, title: 'Gopinath P · Software Engineer' },
  {
    path: 'work/home-server',
    loadComponent: () => import('./case-study/gopicraft').then((m) => m.GopicraftStoryComponent),
    title: 'How I built my own private cloud · Gopinath P',
  },
  {
    path: 'work/canvas-editor',
    loadComponent: () =>
      import('./case-study/canvas-editor').then((m) => m.CanvasEditorStoryComponent),
    title: 'From CAD files to a store map anyone can edit · Gopinath P',
  },
  {
    path: 'work/crm-suite',
    loadComponent: () => import('./case-study/crm-suite').then((m) => m.CrmSuiteStoryComponent),
    title: 'Rebuilding a four-app CRM suite · Gopinath P',
  },
  {
    path: 'work/shipdesk',
    loadComponent: () => import('./case-study/shipdesk').then((m) => m.ShipdeskStoryComponent),
    title: 'ShipDesk, a release tracker · Gopinath P',
  },
  {
    path: 'work/logdesk',
    loadComponent: () => import('./case-study/logdesk').then((m) => m.LogdeskStoryComponent),
    title: 'LogDesk, full request logging without editing 100 APIs · Gopinath P',
  },
  { path: '**', redirectTo: '' },
];
