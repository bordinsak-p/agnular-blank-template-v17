import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'example', pathMatch: 'full' },
  { path: '**', redirectTo: 'example' },
  {
    path: 'example',
    loadComponent: () =>
      import('./example/example.component').then((m) => m.ExampleComponent),
  },
];
