import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class User {

  constructor(private http: HttpClient) {}

  public verifyUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.post<any>('http://localhost:1234/api/user/verify-user', { token: token });
  }
  
}
