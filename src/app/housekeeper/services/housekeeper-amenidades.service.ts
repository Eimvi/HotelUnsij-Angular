import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ChamberMaid, Maid } from '../interfaces/registerAmenidades.interface';
import { Register } from '../interfaces/registerAmenidades.interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HousekeeperAmenidadesService {

  private readonly URL: string = environment.URL;

  constructor(private httpClient: HttpClient, private router:Router, private toastService: ToastrService) { }

  getMaid(): Observable<ChamberMaid[]> {
    return this.httpClient.get<Maid>(`${this.URL}maid/list`).pipe(
      map((response) => {
        return response.body;
      })
    );
  }

  sendInfo(register: Register){
    return this.httpClient.post(`${this.URL}housekeeper/register`, register).pipe(tap(() => {
      this.router.navigate(['/housekeeper/registers']);
      this.toastService.success('¡Registro guardado exitosamente!');
    }) )
  }

}
