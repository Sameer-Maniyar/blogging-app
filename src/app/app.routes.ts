
import { RouterModule, Routes } from '@angular/router';
import { GitHead } from './blogs/git-head/git-head';


export const routes: Routes = [
  {
    path: '',loadComponent: () =>import('./pages/home/home').then((m) => m.Home),
    
  },
  {
    path: 'git-head', component: GitHead ,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
