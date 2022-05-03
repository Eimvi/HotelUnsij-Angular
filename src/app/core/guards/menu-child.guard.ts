import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuChildGuard implements CanActivateChild, CanLoad {

  constructor(private router: Router) { }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
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
