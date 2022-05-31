import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HousekeeperBodyGetReport, Report } from '../interfaces/housekeeperReport.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousekeeperReportsService {

  private readonly URL: string = environment.URL;

  constructor(private httpClient: HttpClient) { }

  getReportHousekeeper(id: string): Observable<Report>{
    return this.httpClient.get<HousekeeperBodyGetReport>(`${this.URL}housekeeper/activity/${id}`).pipe(
      map((response) => {
        return response.body;
      })
    );
  }

  updatedStatusActivity(report: Report){
    const id= {
      id: report.id
    }
    return this.httpClient.patch(`${this.URL}housekeeper/activity`,id)
  }
}
