import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']  // Corrected this line
})
export class UserInfoComponent {
  user: any;
  token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MjU1MzAyMjcsImV4cCI6MTcyNTUzMzgyN30.z1a_VmclS5VP3jc8SYAIgmfQXLj5njiA_wa6vIoP5tQ';

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
        (error: any) => {
          console.error('There was an error fetching user info:', error);
          if (error.error.name === 'TokenExpiredError') {
            console.error('Your session has expired. Please log in again.');
            // Optionally, you can redirect to the login page or refresh the token
          }
        }
      );
  }
  
}
