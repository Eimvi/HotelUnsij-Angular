import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChambermaidReportsService } from '../../services/chambermaid-reports.service';
import { Report } from '../../interfaces/report.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  id: string = this.route.snapshot.queryParams['id'];
  report!: Report;
  statusPosteriorReport!:boolean;
  disabledPrevious: boolean=true;
  disabledPosterior : boolean = true;
  disabledFinish : boolean = true;

  constructor(private route:ActivatedRoute, private router: Router,
              private toastService: ToastrService,private chambermaidReport: ChambermaidReportsService) { }

  ngOnInit(): void {
    const regexp = new RegExp('^[0-9]+$')
    if(this.id ==null || !regexp.test(this.id)){
      this.toastService.warning('La página solicitada no existe. 😥');
      this.router.navigate(['/menu/maid'], {queryParams: { page: 1 }} );
    }else{
      this.chambermaidReport.getReport(this.id).subscribe(data => {
        this.report=data;

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
    this.chambermaidReport.updatedStatusActivity(this.report).subscribe(
      resp => {
        this.router.navigate(['/menu/maid/'], {queryParams: { page: 1 }});
      }
    )
  }

}
