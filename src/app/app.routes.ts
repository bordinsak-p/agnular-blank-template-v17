import { Routes } from '@angular/router';
import { program } from './constants/routes';
import { LoginComponent } from './program/login/login.component';
import { MainContainerComponent } from './main-container/main-container.component';

export const routes: Routes = [
  { path: '', redirectTo: 'program', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'program',
    component: MainContainerComponent,
    children: [...program],
  },
  { path: '**', redirectTo: 'program/home' },
];
