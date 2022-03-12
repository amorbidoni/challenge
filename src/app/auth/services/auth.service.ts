import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../interfaces/auth.interfaces';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  baseUrl: string = environment.baseUrl;
  response: boolean = false;

  login(username: string, password: string) {
    const url: string = `${this.baseUrl}/login`;
    const body = { username, password };

    return this.http.post<AuthResponse>(url, body, httpOptions).pipe(
      tap((resp) => {
        this.response = true;
        localStorage.setItem('token', resp.token);
      }),
      catchError((err) => {
        this.response = false;
        return of(err.error.msg);
      })
    );
  }
  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }

  isLoggedIn() {
    const token = localStorage.getItem('token' || null);
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
