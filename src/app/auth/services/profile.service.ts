import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap} from 'rxjs/operators';
import { User } from '../interfaces/user';
import { environment } from '../../../environments/environment';
import { LoginResponse } from '../interfaces/login.interface';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly URL: string = environment.URL;
  private profile! : LoginResponse;

  constructor(private http: HttpClient) { }

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

}
