import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class UsersComponent implements OnInit {
  userId: string | null = '';
<<<<<<< HEAD
  users: User[] = [];

  isLoading = true;

fetchUsers() {
  this.isLoading = true;
  this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
}
=======
  users: any[] = [];
  loading = false;
  error = false;
>>>>>>> 9631068a4219f7df9bb4e3c02f2b76ca7a9050e4

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.fetchUsers();
  }

<<<<<<< HEAD
=======
  fetchUsers() {
    this.loading = true;
    this.error = false;
    
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          this.users = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = true;
          this.loading = false;
          console.error('Error fetching users:', err);
        }
      });
  }
>>>>>>> 9631068a4219f7df9bb4e3c02f2b76ca7a9050e4
}
