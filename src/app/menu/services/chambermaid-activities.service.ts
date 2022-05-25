import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Body, BodyGetActivities } from '../interfaces/activity.interface';

@Injectable({
  providedIn: 'root'
})
export class ChambermaidActivitiesService {

  private readonly URL: string = environment.URL;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  getActivities(page: number = 1, keyword: string = ''): Observable<Body> {
    const query = { page, keyword };
    return this.httpClient.get<BodyGetActivities>(`${this.URL}maid`, { params: query }).pipe(
      map((response) => {
        return response.body;
      })
    );
  }

  previousReportCreate(previousReport: FormData, id:string){
    const query = {
      id
    }
    return this.httpClient.patch(`${this.URL}previous-report/update/`, previousReport,{params:query});
  }
}
