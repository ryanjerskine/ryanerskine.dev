import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TestingComponent } from './pages/testing/testing.component';


@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class TestingModule { }
