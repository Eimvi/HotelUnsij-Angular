import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user!: FormGroup;
  password!: string;

  constructor(private fb: FormBuilder, public userService: ProfileService) {}

  ngOnInit(): void {
    this.user = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.password = 'password';
  }

  onSubmit(){
    const user: User = this.user.getRawValue();
    this.userService.login(user).subscribe(data =>{})
  }

  hideorShowPassword(){
    if (this.password === 'password') {
      this.password = 'text';
    } else {
      this.password = 'password';
    }
  }

}
