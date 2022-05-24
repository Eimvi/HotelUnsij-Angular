import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PreviousReport } from '../../interfaces/previousReport.interface';
import { ChambermaidActivitiesService } from '../../services/chambermaid-activities.service';
import { Activity } from '../../interfaces/activity.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-previous-report',
  templateUrl: './previous-report.component.html',
  styleUrls: ['./previous-report.component.scss'],
  providers: [DatePipe]
})
export class PreviousReportComponent implements OnInit {
  previousReport!: FormGroup;
  datePipe = new DatePipe('en-US');
  myDate = new Date();
  activities!: Array<Activity>;
  id: string = this.route.snapshot.queryParams['id'];

  constructor(
    private fb: FormBuilder,
    private ChambermaidActivitiesService: ChambermaidActivitiesService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.datePipe.transform(this.myDate, 'EEEE, MMMM d, y');
  }

  ngOnInit(): void {
    const regexp = new RegExp('^[0-9]+$')
    if (this.id == null || !regexp.test(this.id)) {
      this.router.navigateByUrl('/menu/maid');
    }

    this.previousReport = this.fb.group({
      description: ['', [Validators.maxLength(100)]],
      dirtLevel: [0]
    });
  }

  submitForm() {
    const previousReport: PreviousReport = {
      description: this.previousReport.get('description')?.value,
      dirtLevel: this.previousReport.get('dirtLevel')?.value
    };

    let formData: FormData = new FormData();
    formData.append("description", previousReport.description);
    formData.append("dirtLevel", previousReport.dirtLevel);

    this.ChambermaidActivitiesService.previousReportCreate(formData, this.id).subscribe(
      resp => {
        this.router.navigateByUrl('/menu/maid/reports');
      }
    )
  }
}
