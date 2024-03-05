import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'movie/:id',
    loadComponent: () => import('../components/details/details.component').then(m => m.DetailsComponent)
  },
  {
    path: '**',
    loadComponent: () => import('../components/home/home.component').then(m => m.HomeComponent)
  }
];
