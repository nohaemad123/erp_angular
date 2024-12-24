import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServiceDeprecated } from 'app/core/auth/auth.service';
import { of, switchMap } from 'rxjs';

export const TenantGuard: CanActivateFn | CanActivateChildFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) => {
    const tenantData = JSON.parse(localStorage.getItem('user'));
    const router: Router = inject(Router);
    // Check for tenant data existence
    if (!tenantData?.username) {
      return router.createUrlTree(['/Sign-In'], { queryParams: { returnUrl: state.url } });
    }

    return !!tenantData;
  };
