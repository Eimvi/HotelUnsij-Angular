import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { ActivatedAccount } from '../../interfaces/activatedAccount.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activated-account',
  templateUrl: './activated-account.component.html',
  styleUrls: ['./activated-account.component.scss']
})
export class ActivatedAccountComponent implements OnInit {

  code: string = this.routeActivated.snapshot.queryParams['code'];
  id: string = this.routeActivated.snapshot.queryParams['id'];
  constructor(private routeActivated: ActivatedRoute, private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {
    if(this.code && this.id){
      const query: ActivatedAccount = {
        code: this.code,
        id: Number(this.id)
      };
      this.sendActivation(query);
    }else{
      this.router.navigateByUrl('/auth/login');
    }
  }

  sendActivation(data: ActivatedAccount){
    this.profileService.activatedAccount(data).subscribe();
  }

}
