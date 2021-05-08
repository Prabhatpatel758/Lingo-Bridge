import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LandingComponent } from './landingcomponents/landing/landing.component';
import { HomeComponent } from './landingcomponents/home/home.component';
import { PlansandpricingComponent } from './landingcomponents/plansandpricing/plansandpricing.component';
import { TeachwithusComponent } from './landingcomponents/teachwithus/teachwithus.component';
import { LoginComponent } from './landingcomponents/login/login.component';
import { AuthGuard } from './services/auth.guard';



export const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: LandingComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'landing', component: HomeComponent },
      { path: 'plansandprice', component: PlansandpricingComponent },
      { path: 'teachwithus', component: TeachwithusComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: '404', component: P404Component, data: { title: 'Page 404' } },
  { path: '500', component: P500Component, data: { title: 'Page 500' } },
  {
    path: 'default', component: DefaultLayoutComponent, data: { title: 'Home' },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full', },
      { path: 'dashboard', loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'profile', loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule) },
      { path: 'wallet', loadChildren: () => import('./views/wallet/wallet.module').then(m => m.WalletModule) },
      { path: 'availableslots', loadChildren: () => import('./views/availableslots/availableslots.module').then(m => m.AvailableSlotsModule) },
      { path: 'base', loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule) },
      { path: 'buttons', loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule) },
      { path: 'icons', loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule) },
      { path: 'notifications', loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule) },
    ],
    canActivate: [AuthGuard]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
