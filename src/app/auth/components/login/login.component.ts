import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { ProfileService } from '../../services/profile.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user!: FormGroup;
  password: string = 'password';

  constructor(private fb: FormBuilder, public userService: ProfileService, public router: Router) {}

  ngOnInit(): void {
    this.user = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });


  }

  onSubmit(){
    const user: User = this.user.getRawValue();
    this.userService.login(user).subscribe(
      data => {
        const route: string = this.userService.getNameRoute()
        this.router.navigateByUrl(`/menu/${route}`)});
  }

  hideorShowPassword(){
    if (this.password === 'password') {
      this.password = 'text';
    } else {
      this.password = 'password';
    }
  }

}
