import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Body, BodyGetActivities } from '../interfaces/activity.interface';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HousekeeperActivitiesService {

  private readonly URL: string = environment.URL;

  constructor(private httpClient: HttpClient, private toastService: ToastrService) { }

  getActivities(page: number = 1, keyword: string = ''): Observable<Body> {
    const query = { page, keyword };
    return this.httpClient.get<BodyGetActivities>(`${this.URL}housekeeper`, { params: query }).pipe(
      map((response) => {
        return response.body;
      })
    );
  }

  previousReportCreate(previousReport: FormData, id:string){
    const query = {
      id
    }
    return this.httpClient.patch(`${this.URL}previous-report/update/`, previousReport,{params:query}).pipe(
      tap(() => this.toastService.success('El reporte previo se guardo correctamente.'))
    );
  }

  posteriorReportCreate(posteriorReport: FormData, id:string){
    const query = {
      id
    }
    return this.httpClient.patch(`${this.URL}posterior-report/update/`, posteriorReport,{params:query}).pipe(
      tap(() => this.toastService.success('El reporte posterior se guardo correctamente.'))
    );
  }
}

