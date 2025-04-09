import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('authToken');

  if (token) {
    // Si el token existe, permite el acceso
    return true;
  } else {
    // Si no existe, redirige (opcional) y niega acceso
    router.navigate(['/login']);
    return false;
  }
};
