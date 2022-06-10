import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Register, Body } from '../interfaces/inventory.interface';

@Injectable({
  providedIn: 'root'
})
export class HousekeeperInventoryService {

  private readonly URL: string = environment.URL;

  constructor(private httpClient: HttpClient) { }

  getInventories(): Observable<Register[]> {
    return this.httpClient.get<Body>(`${this.URL}housekeeper/registers`).pipe(
      map((response) => {
        return response.body;
      })
    );
  }
}
