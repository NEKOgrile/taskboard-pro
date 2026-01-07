import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home').then(m => m.Home)
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./features/tasks/routes')
        .then(m => m.TASKS_ROUTES)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about').then(m => m.About)
  }
];
