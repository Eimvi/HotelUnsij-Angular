import { Component, OnInit } from '@angular/core';
import { LoginResponse } from 'src/app/auth/interfaces/login.interface';
import { ProfileService } from '../../../auth/services/profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})

export class MyProfileComponent implements OnInit {

  profile!: LoginResponse;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.showData();
  }

  showData(){
    this.profile=this.profileService.showData();
  }

}
