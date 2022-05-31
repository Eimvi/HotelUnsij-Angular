import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HousekeeperActivitiesService {
  private readonly URL: string = environment.URL;

  constructor(private httpClient: HttpClient, private toastService: ToastrService) { }

  housekeeperPreviousReportCreate(housekeeperPreviousReport: FormData, id:string){
    const query = {
      id
    }
    return this.httpClient.patch(`${this.URL}previous-report-housekeeper/update/`, housekeeperPreviousReport,{params:query}).pipe(
      tap(() => this.toastService.success('El reporte previo se guardó correctamente.'))
    );
  }
}
