import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
<<<<<<< HEAD
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'users/:id', component: UsersComponent, canActivate: [AuthGuard] } 
=======
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'users/:id', component: UsersComponent, canActivate: [AuthGuard] }
>>>>>>> 9631068a4219f7df9bb4e3c02f2b76ca7a9050e4
];
