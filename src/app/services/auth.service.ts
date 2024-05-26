import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@app/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, user);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, credentials);
  }

  // Add other authentication-related methods as needed
}