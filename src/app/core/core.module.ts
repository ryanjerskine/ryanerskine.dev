import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    NotFoundComponent,
    ErrorComponent,
    LandingComponent,
    AuthCallbackComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule
  ]
})
export class CoreModule { }
