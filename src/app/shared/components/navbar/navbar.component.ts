import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../auth/services/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  constructor(private profileService: ProfileService) { }

  logOut(){
    this.profileService.logOut();
  }

}
