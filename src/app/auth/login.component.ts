import { Component } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html'
=======
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
>>>>>>> 9631068a4219f7df9bb4e3c02f2b76ca7a9050e4
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError = false;

  constructor(
<<<<<<< HEAD
    private fb: FormBuilder,
=======
    private fb: FormBuilder, 
>>>>>>> 9631068a4219f7df9bb4e3c02f2b76ca7a9050e4
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
<<<<<<< HEAD
      if (this.authService.login(username, password))
      {
        this.router.navigate(['/dashboard']);
      }
      else {
=======
      if (this.authService.login(username, password)) {
        this.router.navigate(['/dashboard']);
      } else {
>>>>>>> 9631068a4219f7df9bb4e3c02f2b76ca7a9050e4
        this.loginError = true;
      }
    }
  }
}
