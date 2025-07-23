import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Digilib {

  isUserLoggedIn(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  logOut(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('token')
    }
  }
  
}
