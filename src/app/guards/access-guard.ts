import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { User } from '../services/user';
import { Digilib } from '../services/digilib';

export const accessGuard: CanActivateFn = (route, state) => {

  const digilibService = inject(Digilib);
  const router = inject(Router);

  if (digilibService.isUserLoggedIn()) {
    console.log('User is logged in, access granted');
    return true;
  } else {
    console.log('User is not logged in, redirecting to login page');
    router.navigate(['/login']);
    return false;
  }
};
