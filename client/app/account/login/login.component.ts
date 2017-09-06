import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
import { Router } from '@angular/router';
import { AuthService } from '../../../components/auth/auth.service';

// @flow
interface User {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'login',
  template: require('./login.html'),
})
export class LoginComponent {
  user: User = {
    name: '',
    email: '',
    password: '',
  };
  errors = {login: undefined};
  submitted = false;
  AuthService;
  Router;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);


  static parameters = [AuthService, Router];
  constructor(_AuthService_: AuthService, router: Router) {
    this.AuthService = _AuthService_;
    this.Router = router;

  }

  login() {
    this.submitted = true;

    return this.AuthService.login({
      email: this.user.email,
      password: this.user.password
    })
      .then(() => {
        // Logged in, redirect to home
        this.Router.navigateByUrl('/home');

      })
      .catch(err => {
        this.errors.login = err.message;
      });
  }
}
