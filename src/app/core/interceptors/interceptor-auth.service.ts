import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorAuthService implements HttpInterceptor {

  constructor(private router: Router, private loadingService: LoadingService, private toastService: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.show();
    let reqClone: HttpRequest<any>;
    const jwToken:string = localStorage.getItem('token')!;

    if(!jwToken){
      reqClone = req.clone({
      });
    }else{
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${jwToken}`
      });
      reqClone = req.clone({
        headers
      });
    }

    return next.handle( reqClone ).pipe(
      tap({
        error: (res) => {
          if(res.error.status == 401){
            this.router.navigate(['/auth']);
            localStorage.removeItem('token');
          }
        }
      }),
      finalize(() => this.loadingService.hide()),
      catchError(resp => {
        this.toastService.error(`${resp.error.message} 😅`);
        return this.errorResponse(resp);
      }),
      );
  }

  errorResponse(error: HttpErrorResponse){
    return throwError(error.message);
  }
}
