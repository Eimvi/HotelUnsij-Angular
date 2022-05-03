import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PasswordReset } from '../interfaces/passwordReset.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private readonly URL: string = environment.URL;

  constructor (private http: HttpClient) { }
  
  changePassword(passwordReset: PasswordReset){
    return this.http.patch(`${this.URL}auth/reset-password`, passwordReset);
  }
}