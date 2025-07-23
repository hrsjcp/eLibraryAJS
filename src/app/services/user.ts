import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class User {

  apiUrl = environment.backendAPI;

  constructor(private http: HttpClient) {}

  public registerUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/add-user`, userData);
  }

  public loginUser(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/login-user`, credentials);
  }

  public verifyUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.post<any>(`${this.apiUrl}/users/verify-user`, { token: token });
  }
  
}
