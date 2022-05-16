import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Password } from '../../interfaces/password.interface';
import { PasswordReset } from '../../interfaces/passwordReset.interface';
import { PasswordService } from '../../services/password.service';
import { ConfirmedValidator } from '../../helpers/confirmed.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})

export class ChangePasswordComponent implements OnInit {
  passwordReset!: PasswordReset;
  passwordForm!: FormGroup;
  expression: boolean = true;
  token: string = this.route.snapshot.queryParams['resetPasswordToken'];
  password: string = 'password';

  constructor(private fb: FormBuilder,
    private passwordService: PasswordService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(!this.token){
      this.router.navigateByUrl('/auth/login');
    }else{
      this.createForm();
    }    
  }

  // Valida los datos del formulario
  createForm(): void {
    this.passwordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}')]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: ConfirmedValidator('newPassword', 'confirmPassword')
    });
  }

  // Obtiene los datos del formulario
  onSubmit(): void {
    const password: Password = {
      newPassword: this.newPassword?.value,
      confirmPassword: this.confirmPassword?.value
    };

    this.resetPassword(password);
  }

  // Invoca al servicio para restablecer la contraseña
  resetPassword(password: Password) {
    const passwordReset: PasswordReset = {
      password: password.newPassword,
      resetPasswordToken: this.token
    }

    this.passwordService.changePassword(passwordReset).subscribe(
      resp => {
        this.router.navigateByUrl('/auth/successful-change');
      }
    );
  }

  hideShowPassword(){
    if (this.password === 'password') {
      this.password = 'text';
    } else {
      this.password = 'password';
    }
  }

  get newPassword() {
    return this.passwordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.passwordForm.get('confirmPassword');
  }
}