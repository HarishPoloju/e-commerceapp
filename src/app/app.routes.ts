import { Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CartComponent } from './components/pages/site/cart/cart.component';
import { HomeComponent } from './components/pages/site/home/home.component';
import { LoginComponent } from './components/pages/site/login/login.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '/',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
