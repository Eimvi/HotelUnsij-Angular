import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Body, BodyGetRegisters } from '../interfaces/pettyCash.interface';

@Injectable({
  providedIn: 'root'
})
export class PettyCashService {

  private readonly URL: string = environment.URL;

  constructor(private httpClient: HttpClient) { }

  getRegisters(page: number = 1, keyword: string = ''): Observable<Body> {
    const query = { page, keyword };
    return this.httpClient.get<BodyGetRegisters>(`${this.URL}attendant/cash`, { params: query }).pipe(
      map((response) => {        
        return response.body;
      })
    );
  }
}