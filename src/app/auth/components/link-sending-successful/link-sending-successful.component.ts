import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { timer, Observable } from 'rxjs';
import { scan, takeWhile } from 'rxjs/operators';
import { Address} from '../../interfaces/address.interface';

@Component({
  selector: 'app-link-sending-successful',
  templateUrl: './link-sending-successful.component.html',
  styleUrls: ['./link-sending-successful.component.scss']
})

export class LinkSendingSuccessfulComponent implements OnInit {

  user!: Address;
  disabled: boolean = true;
  timer$!: Observable<number>;

  constructor(private router: Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      email: this.rutaActiva.snapshot.params.email
    };
    
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        if (this.user.email == null) {
          this.router.navigateByUrl('/login');
        } else {
          this.user.email = params.email;
        }
      }
    );
  }

  ngAfterViewInit() {
    this.timer();
  }

  // Desabilita el botón 'Enviar' hasta terminar 
  // la cuenta regresiva de 9 segundos
  timer() {
    if (!this.disabled) {
      this.disabled = true;
    }
    
    this.timer$ = timer(0, 1000).pipe(
      scan((acc) => --acc, 10),
      takeWhile((x) => {
        if(x <= 0){
          this.disabled = false;
          return x >= 0;
        }else{
          this.disabled = true;
        }
        return x >= 0;
      })
    );
  }

}
