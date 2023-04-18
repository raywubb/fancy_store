import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const { path } = route.routeConfig as Route;
    console.log('.. L15', path);

    if (path?.includes('cart')) {
      const token = localStorage.getItem('token');
      if (!token) {
        localStorage.setItem('path', `/${path}`);
        this.router.navigateByUrl('/login');
        return false;
      }
    }

    return true;
  }
}
