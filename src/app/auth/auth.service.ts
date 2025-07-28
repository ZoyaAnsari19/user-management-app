import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'valid-token');
      this.isLoggedIn.next(true);
      return true;
    }
    return false;
  }

  logout() {
  localStorage.removeItem('user');
  this.router.navigate(['/login']);
}


  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
