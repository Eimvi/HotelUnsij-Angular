import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataUser } from '../../interfaces/dataUser.interface';
import { ProfileService } from '../../services/profile.service';
import { checkPasswords } from '../../helpers/confirmed.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  dataUser!: FormGroup;
  password: string = 'password';
  confirmPassword: string = 'password';

  constructor(private fb: FormBuilder,private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.dataUser = this.fb.group(
      {
        name: ['', [
          Validators.required, Validators.minLength(1),
          Validators.maxLength(20), Validators.pattern('^[a-zA-Z_ ]*$')
        ]],
        firstSurname: ['', [
          Validators.required, Validators.minLength(1),
          Validators.maxLength(15), Validators.pattern('^[a-zA-Z_ ]*$')
        ]],
        secondSurname: ['', [
          Validators.required, Validators.minLength(1),
          Validators.maxLength(15), Validators.pattern('^[a-zA-Z_ ]*$')
        ]],
        email: ['', [
          Validators.required, Validators.email,
          Validators.minLength(15), Validators.maxLength(30)
        ]],
        password: ['', [
          Validators.required, Validators.minLength(8),
          Validators.maxLength(30), Validators.pattern('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}')
        ]],
        confirmPassword: ['', [Validators.required]],
        numberPhone: ['', [
          Validators.required, Validators.minLength(10),
          Validators.maxLength(12), Validators.pattern('^[0-9]+$')
        ]],
        address: ['', [
          Validators.required, Validators.minLength(10),
          Validators.maxLength(50)]],
        foreigner: [false],
        rfc: ['', [
          Validators.required, Validators.minLength(12),
          Validators.maxLength(13), Validators.pattern('^[a-zA-Z0-9]*$')
        ]],
        curp: ['',[
          Validators.required, Validators.minLength(18),
          Validators.maxLength(18), Validators.pattern('^[a-zA-Z0-9]*$')
        ]]
      },
      { validators: checkPasswords }
    );
  }

  //Call to service
  onSubmit(): void {
    const dataUser: DataUser = {
      name: this.dataUser.get('name')?.value,
      firstSurname: this.dataUser.get('firstSurname')?.value,
      secondSurname: this.dataUser.get('secondSurname')?.value,
      email: this.dataUser.get('email')?.value,
      password: this.dataUser.get('password')?.value,
      numberPhone: this.dataUser.get('numberPhone')?.value,
      address: this.dataUser.get('address')?.value,
      foreigner: this.dataUser.get('foreigner')?.value,
      rfc: this.dataUser.get('rfc')?.value,
      curp: this.dataUser.get('curp')?.value
    };
    this.profileService.register(dataUser).subscribe(
      resp => {
        this.router.navigateByUrl('/auth/register-successful');
      }
    )
  }

  hideorShowPassword() {
    if (this.password === 'password') {
      this.password = 'text';
      this.confirmPassword = 'text';
    } else {
      this.password = 'password';
      this.confirmPassword = 'password';

    }
  }
}
