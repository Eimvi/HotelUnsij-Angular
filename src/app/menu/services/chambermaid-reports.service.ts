import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BodyGetReport, Report } from '../interfaces/report.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChambermaidReportsService {

  private readonly URL: string = environment.URL;


  constructor(private httpClient: HttpClient) { }

  getReport(id:number): Observable<Report> {
    return this.httpClient.get<BodyGetReport>(`${this.URL}maid/activity/${id}`).pipe(
      map((response) => {
        return response.body;
      })
    );
  }

  updatedStatusActivity(report: Report){
    const id = {
      id: report.id
    }
    return this.httpClient.patch(`${this.URL}maid/activity`,id);
  }
}
