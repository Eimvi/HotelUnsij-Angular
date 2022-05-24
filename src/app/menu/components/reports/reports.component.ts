import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChambermaidReportsService } from '../../services/chambermaid-reports.service';
import { Report } from '../../interfaces/report.interface';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  id: number = this.route.snapshot.queryParams['id'];
  report!: Report;
  statusPosteriorReport!:boolean;
  disabledPosterior : boolean = true;
  disabledFinish : boolean = true;

  constructor(private route:ActivatedRoute, private chambermaidReport: ChambermaidReportsService, private router: Router) { }

  ngOnInit(): void {
    this.chambermaidReport.getReport(this.id).subscribe(data => {
      this.report=data;
      console.log(this.report);
      let statusPrevious = this.report.reports.previousReport.active;
      let statusPost = this.report.reports.posteriorReport.active;

      if(statusPrevious){
        this.disabledPosterior = false;
      }

      if(statusPrevious && statusPost){
        this.disabledFinish = false;
      }

    })
  }

  onSubmit(){
    this.chambermaidReport.updatedStatusActivity(this.report).subscribe(
      resp => {
        this.router.navigate([`/menu/maid/`]);
      }
    )
  }

}
