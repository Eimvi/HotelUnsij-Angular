import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Password } from '../../interfaces/password.interface';
import { PasswordReset } from '../../interfaces/passwordReset.interface';
import { PasswordService } from '../../services/password.service'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})

export class ChangePasswordComponent implements OnInit {
  passwordReset!: PasswordReset;
  passwordForm!: FormGroup;
  expression: boolean = true;

  constructor(private fb: FormBuilder,
    private passwordService: PasswordService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
  }

  // Valida los datos del formulario
  createForm(): void {
    this.passwordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}')]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  // Obtiene los datos del formulario
  onSubmit(): void {
    const password: Password = {
      newPassword: this.newPassword?.value,
      confirmPassword: this.confirmPassword?.value
    };

    this.expression = this.checkPassword(password);
    if (this.expression) {
      // Invoca a la función para restablecer la contraseña
      this.resetPassword(password);
    } else {
      this.expression = false;
    }
  }

  // Verifica que ambas contraseñas sean iguales
  checkPassword(password: Password): boolean {
    if (password.newPassword == password.confirmPassword) {
      return true;
    } else {
      return false;
    }
  }

  // Invoca al servicio para restablecer la contraseña
  resetPassword(password: Password) {
    const passwordReset: PasswordReset = {
      password: password.newPassword,
      resetPasswordToken: this.route.snapshot.queryParams['resetPasswordToken']
    }

    this.passwordService.changePassword(passwordReset).subscribe(
      resp => {
        this.router.navigateByUrl('/successful-change');
      }
    )
  }

  get newPassword() {
    return this.passwordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.passwordForm.get('confirmPassword');
  }
}