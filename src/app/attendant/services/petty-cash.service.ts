import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Register, Body } from '../interfaces/pettyCash.interface';

@Injectable({
  providedIn: 'root'
})
export class PettyCashService {

  private readonly URL: string = environment.URL;

  constructor(private httpClient: HttpClient) { }

  getRegisters(): Observable<Register[]> {
    return this.httpClient.get<Body>(`${this.URL}attendant/cash`).pipe(
      map((response) => {
        return response.body;
      })
    );
  }
}