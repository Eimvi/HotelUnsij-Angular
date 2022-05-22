import { AbstractControl, ValidationErrors } from "@angular/forms";

export const checkPasswords = (group: AbstractControl):  ValidationErrors | null => {
  const pass = group.get('password')?.value;
  const confirmPass = group.get('confirmPassword')?.value;
  return pass === confirmPass ? null : { notSame: true }
}

