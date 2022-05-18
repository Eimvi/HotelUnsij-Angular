import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ProfileService } from 'src/app/auth/services/profile.service';

@Injectable({
  providedIn: 'root'
})
export class MenuChildGuard implements CanActivateChild, CanLoad {

  constructor(private router: Router, private profileService: ProfileService) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
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
