import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class UsersComponent implements OnInit {
  userId: string | null = '';
  users: any[] = [];
  loading = false;
  error = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.fetchUsers();
  }

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
}
