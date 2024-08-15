import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  user: any;
  token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MjI5NTE3NDIsImV4cCI6MTcyMjk1NTM0Mn0.caO184Smk2kduRz23nq-dLkguqipjJ2g36kEbgBkZ3o';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    this.http.get('https://dummyjson.com/auth/me', { headers })
      .subscribe(
        (data: any) => this.user = data,
        (error: any) => console.error('There was an error!', error)
      );
  }
}
