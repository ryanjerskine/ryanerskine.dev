import { AccountRequiredComponent } from './account-required/account-required.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RequestAccessComponent } from './request-access/request-access.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'auth-callback', component: AuthCallbackComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'request-access', component: RequestAccessComponent },
  { path: 'account-required', component: AccountRequiredComponent },
  { path: 'testing', loadChildren: () => import('../testing/testing.module').then(m => m.TestingModule) },
  { path: 'media', loadChildren: () => import('../media/media.module').then(m => m.MediaModule) },
  { path: 'kiosk', loadChildren: () => import('../kiosk/kiosk.module').then(m => m.KioskModule) },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
