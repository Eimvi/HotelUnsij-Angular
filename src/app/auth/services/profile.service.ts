
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap} from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import { User } from '../interfaces/user';
import { LoginResponse } from '../interfaces/login.interface';
import { Address } from '../interfaces/address.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly URL: string = environment.URL;
  private profile! : LoginResponse;

  constructor(private http: HttpClient, private router: Router) { }

  login(user: User){
    return this.http.post<LoginResponse>(`${this.URL}auth/login`,user).pipe(
      tap(
      (resp)=>{
        localStorage.setItem('token',resp.accessToken);
        this.profile = resp;
      }
    )
    );
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login');
  }

  showData(){
   return this.profile;
  }

  getLink(email: Address){
    return this.http.patch(`${this.URL}auth/request-reset-password`, email);
  }
}
