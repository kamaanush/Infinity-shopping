import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://dummyjson.com/auth/me';
  private refreshTokenUrl = 'https://dummyjson.com/auth/refresh';

  constructor(private http: HttpClient) { }

  getUserDetails(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(this.apiUrl, { headers }).pipe(
      catchError(error => {
        if (error.status === 401) {
          // Token expired, try to refresh
          return this.refreshToken().pipe(
            switchMap(newToken => {
              // Retry the request with the new token
              const newHeaders = new HttpHeaders({
                'Authorization': `Bearer ${newToken}`
              });
              return this.http.get<any>(this.apiUrl, { headers: newHeaders });
            })
          );
        } else {
          return throwError(error);
        }
      })
    );
  }

  refreshToken(): Observable<string> {
    // Retrieve refresh token from storage
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) {
      return throwError('No refresh token found');
    }

    // Include the refresh token in the request payload
    return this.http.post<any>(this.refreshTokenUrl, {
      refreshToken,
      expiresInMins: 30 // optional, defaults to 60 if not provided
    }).pipe(
      map(response => {
        // Assuming the response contains the new access token
        return response.newToken; // Adjust according to the actual response format
      }),
      catchError(error => {
        console.error('Error refreshing token', error);
        return throwError(error);
      })
    );
  }
}
