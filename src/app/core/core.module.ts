import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { CoreRoutingModule } from './core-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AccountRequiredComponent } from './account-required/account-required.component';
import { RequestAccessComponent } from './request-access/request-access.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    ErrorComponent,
    LandingComponent,
    AuthCallbackComponent,
    AccountRequiredComponent,
    RequestAccessComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class CoreModule { }
