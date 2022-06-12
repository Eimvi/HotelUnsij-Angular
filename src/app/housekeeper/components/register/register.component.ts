import { Component, OnInit, Input } from '@angular/core';
import { ChamberMaid } from '../../interfaces/registerAmenidades.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Register } from '../../interfaces/registerAmenidades.interface';
import { ProfileService } from 'src/app/auth/services/profile.service';
import { HousekeeperAmenidadesService } from '../../services/housekeeper-amenidades.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() maidList!: Array<Body>;
  data: ChamberMaid[] = []
  isEdit: boolean = true;
  profile = this.profileService.showData();

  registerAmenidades!: FormGroup;


  constructor(private router: Router, private route: ActivatedRoute, private toastService: ToastrService,
    private housekeeperAmenidades: HousekeeperAmenidadesService, private fb: FormBuilder, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.registerAmenidades = this.fb.group({
      id: [this.profile.id],
      type: ['Salida'],
      name: [this.profile.name],
      toallas: [0],
      sabanas: [0],
      cobija: [0]
    })
  }

  onOptionsSelected(value: string) {
    if (value == 'Camarista') {
      this.isEdit = false;
      this.getMaid();
    } else {
      this.isEdit = true;
      this.data = [];
      this.registerAmenidades.patchValue({
        id: [this.profile.id],
        name: [this.profile.name]
      })
    }
  }

  option(id: string) {
    const idMaid = this.data.findIndex(item => item.id == Number(id));
    const maid = this.data[idMaid];
    this.registerAmenidades.patchValue({ id: maid.id, name: maid.name })
  }


  onSubmit() {
    const register: Register = {
      id: this.registerAmenidades.get('id')?.value,
      type: this.registerAmenidades.get('type')?.value,
      name: this.registerAmenidades.get('name')?.value,

      amenidades: [
        {
          name: 'toallas',
          quantity: this.registerAmenidades.get('toallas')?.value
        },
        {
          name: 'sabanas',
          quantity: this.registerAmenidades.get('sabanas')?.value
        },
        {
          name: 'cobija',
          quantity: this.registerAmenidades.get('cobija')?.value
        }
      ]
    }
    console.log(register)
    this.housekeeperAmenidades.sendInfo(register).subscribe(
      resp => {
        this.router.navigate(['/housekeeper/register']);
        this.toastService.success('¡Registo guardado exitosamente!');

      }
    )

  }

  getMaid(): void {
    this.housekeeperAmenidades.getMaid()
      .subscribe(data => {
        this.data = data
      });

  }
}
