
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Address } from '../interfaces/address.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly URL: string = environment.URL;

  constructor ( private http: HttpClient) { }

  getLink(email: Address){
    return this.http.patch(`${this.URL}auth/request-reset-password`, email);

  }
}
