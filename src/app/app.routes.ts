import { Routes } from '@angular/router';

// routes de l'app
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home').then(m => m.Home)
  },
  {
    path: 'tests',
    // page pour voir les tests en visuel
    loadComponent: () =>
      import('./features/test-dashboard/test-dashboard.component').then(m => m.TestDashboardComponent)
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./features/tasks/routes')
        .then(m => m.TASKS_ROUTES) // a refactoriser
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/routes')
        .then(m => m.ABOUT_ROUTES)
  }
];
