import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ProfileService } from '../../auth/services/profile.service';

@Injectable({
  providedIn: 'root'
})
export class MenuGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private profileService: ProfileService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      return this.profileService.checkJwt().pipe(
        tap(valid => {
          if(!valid)
            this.router.navigateByUrl('/auth/login');
        })
      );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]) {
      return this.profileService.checkJwt().pipe(
        tap(valid => {
          if(!valid)
            this.router.navigateByUrl('/auth/login');
        })
      );
  }
}
