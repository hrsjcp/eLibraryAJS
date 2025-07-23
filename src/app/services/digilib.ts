import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Digilib {

  isUserLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut(): void {
    localStorage.removeItem('token');
  }
  
}
