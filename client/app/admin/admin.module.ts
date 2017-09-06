import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';


const adminRoutes: Routes = [{
  path: 'admin',
  component: AdminComponent,
}];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(adminRoutes),

    ],
    declarations: [
        AdminComponent,
    ],
    exports: [
        AdminComponent,
    ],
})
export class AdminModule {}
