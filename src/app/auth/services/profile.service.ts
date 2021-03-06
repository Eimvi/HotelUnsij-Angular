
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { User } from '../interfaces/user';
import { LoginResponseBody, Profile } from '../interfaces/login.interface';
import { Address } from '../interfaces/address.interface';
import { DataUser } from '../interfaces/dataUser.interface';
import { ActivatedAccount } from '../interfaces/activatedAccount.interface';
import { PasswordReset } from '../interfaces/passwordReset.interface';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly URL: string = environment.URL;
  private profile! : Profile;

  constructor(private http: HttpClient, private router: Router, private toastService: ToastrService) { }

  login(user: User){
    return this.http.post<LoginResponseBody>(`${this.URL}auth/login`,user).pipe(
      tap(
      (resp)=>{
        localStorage.setItem('token',resp.body.accessToken);
        this.profile = resp.body;
        this.toastService.success(`Bienvenido ${resp.body.name}. 😊`);
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

  register(dataUser: DataUser){
    return this.http.post(`${this.URL}auth/register`, dataUser);
  }

  activatedAccount(data: ActivatedAccount){
    const query = { code: data.code, id: data.id };
    return this.http.get<void>(`${this.URL}auth/activate-account`, { params: query });
  }
  changePassword(passwordReset: PasswordReset){
    return this.http.patch(`${this.URL}auth/reset-password`, passwordReset);
  }

  checkJwt(){
    return this.http.get<LoginResponseBody>(`${this.URL}auth/renew-jwt`).pipe(
      tap(
        (resp)=>{
          localStorage.setItem('token',resp.body.accessToken);
          this.profile = resp.body;
        }
      ), map(() => true),
      catchError( () => {
        localStorage.removeItem('token');
        return of(false);
      } )
    );
  }

  getNameRoute(){
    const route: string = this.profile?.role.jobPosition;
    if(route == 'camarista') return 'maid';
    if(route == 'encargado') return 'attendant';
    if(route == 'ama de llaves') return 'housekeeper';
    return route;
  }
}
