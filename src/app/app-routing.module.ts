import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: '/analytics', pathMatch: 'full' },
      { path: 'analytics', loadComponent: () => import('./dashboard/dashboard/dash-analytics.component') },
      { path: 'component', loadChildren: () => import('./dashboard/ui-element/ui-basic.module').then(m => m.UiBasicModule) },
      { path: 'chart', loadComponent: () => import('./dashboard/chart-maps/core-apex.component') },
      { path: 'forms', loadComponent: () => import('./dashboard/forms/form-elements/form-elements.component') },
      { path: 'tables', loadComponent: () => import('./dashboard/tables/tbl-bootstrap/tbl-bootstrap.component') },
      { path: 'sample-page', loadComponent: () => import('./dashboard/other/sample-page/sample-page.component') }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      { path: 'auth/signup', loadComponent: () => import('./dashboard/pages/authentication/sign-up/sign-up.component') },
      { path: 'auth/signin', loadComponent: () => import('./dashboard/pages/authentication/sign-in/sign-in.component') }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
