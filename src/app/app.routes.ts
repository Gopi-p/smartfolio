import { Routes } from '@angular/router';
import { ReadmeComponent } from './readme/readme';

/*
  The workbench: every part of the portfolio is its own routed view,
  opened from the file-tree rail. Deep-linkable, titled, lazy.
*/
export const routes: Routes = [
  { path: '', component: ReadmeComponent, title: 'Gopinath P · Software Engineer' },
  {
    path: 'work',
    loadComponent: () => import('./projects/projects').then((m) => m.ProjectsComponent),
    title: 'Case files · Gopinath P',
  },
  {
    path: 'work/home-server',
    loadComponent: () => import('./case-study/gopicraft').then((m) => m.GopicraftStoryComponent),
    title: 'How I built my own private cloud · Gopinath P',
  },
  {
    path: 'systems',
    loadComponent: () => import('./built/built').then((m) => m.BuiltComponent),
    title: "What's running · Gopinath P",
  },
  {
    path: 'log',
    loadComponent: () => import('./about/about').then((m) => m.AboutComponent),
    title: 'The record · Gopinath P',
  },
  {
    path: 'stack',
    loadComponent: () => import('./skills/skills').then((m) => m.SkillsComponent),
    title: 'The manifest · Gopinath P',
  },
  {
    path: 'runbook',
    loadComponent: () => import('./philosophy/philosophy').then((m) => m.PhilosophyComponent),
    title: 'The runbook · Gopinath P',
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then((m) => m.ContactComponent),
    title: 'Open a connection · Gopinath P',
  },
  { path: '**', redirectTo: '' },
];
