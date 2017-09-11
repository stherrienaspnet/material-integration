import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MdInputModule, MdButtonModule, MdCard, MdCardContent} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from './signup/signup.component';

const accountRoutes: Routes = [{
  path: 'login',
  component: LoginComponent,
  //data: { title: 'Home' }
}, {
  path: 'settings',
  component: SettingsComponent,
}, {
  path: 'signup',
  component: SignupComponent,
}];

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        MdInputModule,
        MdButtonModule,

        BrowserAnimationsModule,
        RouterModule.forChild(accountRoutes),

    ],
    declarations: [
        LoginComponent,
        SignupComponent,
        SettingsComponent,
    ],
})
export class AccountModule {}
