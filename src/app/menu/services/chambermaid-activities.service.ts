import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Activity, BodyGetActivities } from '../interfaces/activity.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChambermaidActivitiesService {

  private readonly URL: string = environment.URL;

  constructor(private httpClient: HttpClient) { }

  getActivities(): Observable<Activity[]> {
    return this.httpClient.get<BodyGetActivities>(`${this.URL}maid`).pipe(
      map((response) => {
        return response.body;
      })
    );
  }
}
