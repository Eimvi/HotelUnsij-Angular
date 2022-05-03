import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Password } from '../../interfaces/password.interface';
import { PasswordService } from '../../services/password.service'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})

export class ChangePasswordComponent implements OnInit {
  password!: Password;
  passwordForm!: FormGroup;
  expression: boolean = true;

  constructor(private fb: FormBuilder,
    private passwordService: PasswordService, public router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  // Valida los datos del formulario
  createForm(): void {
    this.passwordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}')]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}')]]
    });
  }

  // Obtiene los datos del formulario
  onSubmit(): void {
    const password: Password = {
      newPassword: this.newPassword?.value,
      confirmPassword: this.confirmPassword?.value
    };

    this.expression = this.checkPassword();
    if (this.expression) {
      // Invoca a la función para restablecer la contraseña
      this.resetPassword();
    } else {
      this.expression = false;
    }
  }

  // Verifica que ambas contraseñas sean iguales
  checkPassword(): boolean {
    if (this.newPassword?.value == this.confirmPassword?.value) {
      return true;
    } else {
      return false;
    }
  }

  // Invoca al servicio para restablecer la contraseña
  resetPassword() {
    const password: Password = this.passwordForm.getRawValue();
    this.passwordService.changePassword(password).subscribe(resp => {
      this.router.navigateByUrl('/successful-change');
    })
  }

  get newPassword() {
    return this.passwordForm.get('newPassword');
  }
  
  get confirmPassword() {
    return this.passwordForm.get('confirmPassword');
  }
}