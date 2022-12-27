import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "http://localhost:5000/users/signin";
  constructor(private http: HttpClient) { }

  proceedLogin(userCreds: any) {
    return this.http.post(this.apiUrl, userCreds)
      .pipe(map(data => {

        return data
      }),
        catchError(error => {
          if (error.status === 401 || error.status === 403) {
            window.alert(error.statusText)

          }
          return throwError(() => error.status);




        }));
  }

  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }
}
