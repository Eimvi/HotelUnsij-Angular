import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class depositService {

  private readonly URL: string = environment.URL;

  constructor(private httpClient: HttpClient, private toastService: ToastrService) { }


  depositReportCreate(depositReport: FormData, id:string){
    const query = {
      id
    }
    console.log("formData: ", depositReport)

    return this.httpClient.patch(`${this.URL}deposit/`, depositReport,{params:query}).pipe(

      tap(() => this.toastService.success('El reporte de depósito se guardó correctamente.'))
    );
  }

}
