import { Component, OnInit, Input} from '@angular/core';
import { ChamberMaid} from '../../interfaces/registerAmenidades.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder} from '@angular/forms';
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
  public data: ChamberMaid[] = []
  is_edit!: boolean;
  profile = this.profileService.showData();

  registerAmenidades!: FormGroup;


  constructor(private router: Router, private route: ActivatedRoute, private toastService: ToastrService,
    private housekeeperAmenidades: HousekeeperAmenidadesService, private fb: FormBuilder, private profileService: ProfileService) { this.is_edit = true; }

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
      this.is_edit = false;
      this.getMaid();
    } else {
      this.is_edit = true;
      this.data = [];

    }
  }

  option(id: string) {
    const idMaid = this.data.findIndex(item => item.id == Number(id));
    const maid = this.data[idMaid];
    this.registerAmenidades.patchValue({ id: maid.id, name: maid.name })
  }


  onSubmit() {
    const register : Register = {
      id:this.registerAmenidades.get('id')?.value,
      type:this.registerAmenidades.get('type')?.value,
      name:this.registerAmenidades.get('name')?.value,

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
    this.housekeeperAmenidades.sendInfo(register).subscribe(
      resp => {
        this.router.navigate(['/housekeeper/amenityRecordsList']);
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
