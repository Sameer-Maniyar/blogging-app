
import { RouterModule, Routes } from '@angular/router';

import { BlogDetails } from './pages/blog-details/blog-details';


export const routes: Routes = [
  {
    path: '',loadComponent: () =>import('./pages/home/home').then((m) => m.Home),
    
  },

 

  { path: 'blog/:id', component: BlogDetails },

  {
    path: '**',
    redirectTo: '',
  },
];
