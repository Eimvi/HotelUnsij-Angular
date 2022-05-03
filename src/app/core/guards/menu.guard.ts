import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuGuard implements CanActivate, CanLoad {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const jwToken: string = localStorage.getItem('token')!;
    if (jwToken) {
      return true;
    }
    this.router.navigateByUrl('/auth/login');
    return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean {
    const jwToken: string = localStorage.getItem('token')!;
    if (jwToken) {
      return true;
    }
    this.router.navigateByUrl('/auth/login');
    return false;
  }
}
