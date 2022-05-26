import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PreviousReport } from '../../interfaces/previousReport.interface';
import { ChambermaidActivitiesService } from '../../services/chambermaid-activities.service';
import { Activity } from '../../interfaces/activity.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoCaptureService } from '../../services/video-capture.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-previous-report',
  templateUrl: './previous-report.component.html',
  styleUrls: ['./previous-report.component.scss']
})
export class PreviousReportComponent implements OnInit {

  myDate = new Date();
  activities!: Array<Activity>;
  videoError: boolean = false;
  id: string = this.route.snapshot.queryParams['id'];

  previousReport: FormGroup = this.fb.group({
    description: ['', [Validators.maxLength(100)]],
    dirtLevel: [1]
  });

  constructor(
    private fb: FormBuilder,
    private ChambermaidActivitiesService: ChambermaidActivitiesService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService,
    private videoService: VideoCaptureService

  ) {}

  ngOnInit(): void {
    const regexp = new RegExp('^[0-9]+$');
    if (this.id == null || !regexp.test(this.id)) {
      this.toastService.warning('La página solicitada no existe. 😥');
      this.router.navigate(['/menu/maid'], {queryParams: { page: 1 }});
    }
  }

  submitForm() {
    const previousReport: PreviousReport = {
      description: this.previousReport.get('description')?.value,
      dirtLevel: this.previousReport.get('dirtLevel')?.value
    };
    let formData: FormData = new FormData();
    const video = this.videoService.getVideo();
    if(video){
      this.videoError = false;
      formData.append("description", previousReport.description);
      formData.append("dirtLevel", previousReport.dirtLevel);
      formData.append("video", video);

      this.ChambermaidActivitiesService.previousReportCreate(formData, this.id).subscribe(
        resp => {
          this.router.navigate(['/menu/reports'],{ queryParams: {id:this.id}});
        }
      )
    }else{
      this.videoError = true;
    }
  }
}
