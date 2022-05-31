import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HousekeeperReportsService } from '../../services/housekeeper-reports.service';
import { Report } from '../../interfaces/housekeeperReport.interface';

@Component({
  selector: 'app-housekeeper-reports',
  templateUrl: './housekeeper-reports.component.html',
  styleUrls: ['./housekeeper-reports.component.scss']
})
export class HousekeeperReportsComponent implements OnInit {

  id: string = this.route.snapshot.queryParams['id'];
  report!: Report;
  disabledPrevious: Boolean = true;
  disabledPosterior : boolean = true;
  disabledFinish : boolean = true;

  constructor(private route: ActivatedRoute, private router: Router,
              private toastService: ToastrService, private housekeeperReport: HousekeeperReportsService) { }

  ngOnInit(): void {
    const regexp = new RegExp('^[0-9]+$')
    if(this.id == null || !regexp.test(this.id)){
      this.toastService.warning('La página solicitada no existe. 😥');
      this.router.navigate(['/housekeeper/activities'], {queryParams: { page: 1 }} );
    }else{
      this.housekeeperReport.getReportHousekeeper(this.id).subscribe(data => {
        this.report=data;
        console.log(this.report)

        let statusPrevious = this.report.reports.previousReport.active;
        let statusPost = this.report.reports.posteriorReport.active;

        this.checkStatusReports(statusPrevious,statusPost);
      })
    }
  }

  checkStatusReports(statusPrev: boolean, statusPost: boolean){

    if(!statusPrev){
      this.disabledPrevious = false;
      this.disabledPosterior = true;
    }else if(statusPost){
      this.disabledFinish = false;
      this.disabledPrevious= true;
      this.disabledPosterior = true;
    }else{
      this.disabledPrevious=true;
      this.disabledPosterior=false;
    }
  }

  onSubmit(){
    this.housekeeperReport.updatedStatusActivity(this.report).subscribe(
      resp => {
        this.router.navigate(['/housekeeper/activities'], {queryParams: {page: 1 }});
      }
    )
  }

}
