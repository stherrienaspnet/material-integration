import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdIconModule } from '@angular/material';



import { RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    AuthModule,

    RouterModule,
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,

  ],
  exports: [
    NavbarComponent,
    FooterComponent,

  ]
})
export class DirectivesModule {}
