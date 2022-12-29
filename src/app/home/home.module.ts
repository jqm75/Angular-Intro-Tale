import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { EscenaComponent } from './escena/escena.component';


@NgModule({
  declarations: [
    HomeComponent,
    EscenaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
