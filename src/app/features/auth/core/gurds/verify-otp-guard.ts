import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const verifyOtpGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router);
  const email = sessionStorage.getItem('auth_email');

  if (!email) {
    _router.navigate(['/auth/send-email-verification']);
    return false;
  }
  return true;
};
