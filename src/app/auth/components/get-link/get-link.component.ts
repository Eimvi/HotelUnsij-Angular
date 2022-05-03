import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/auth/interfaces/address.interface';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-link',
  templateUrl: './get-link.component.html',
  styleUrls: ['./get-link.component.scss']
})
export class GetLinkComponent implements OnInit {

  address!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private profileService: ProfileService) { }

  // form validation
  ngOnInit(): void {
    this.address = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(15), Validators.maxLength(40)]]

    });
  }

  //Call to service
  onSubmit() {
    const email: Address = this.address.getRawValue();
    this.profileService.getLink(email).subscribe(
      resp => {
        this.router.navigate([`/auth/link-successful/${email.email}`]);
      }
    )
  }


}
