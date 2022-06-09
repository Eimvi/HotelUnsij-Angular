import { Component, OnInit } from '@angular/core';
import { Activity } from '../../interfaces/activity.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HousekeeperActivitiesService } from '../../services/housekeeper-activities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VideoCaptureService } from '../../../menu/services/video-capture.service';
import { HousekeeperPosteriorReport } from '../../interfaces/housekeeperPosteriorReport';

@Component({
  selector: 'app-housekeeper-posterior-report',
  templateUrl: './housekeeper-posterior-report.component.html',
  styleUrls: ['./housekeeper-posterior-report.component.scss']
})
export class HousekeeperPosteriorReportComponent implements OnInit {

  myDate = new Date();
  activities!:Array<Activity>
  videoError: boolean = false;
  id: string = this.route.snapshot.queryParams['id']

  housekeeperPosteriorReport: FormGroup = this.fb.group({
    description: ['', [Validators.maxLength(100)]]
  });

  constructor(
    private fb: FormBuilder,
    private housekeeperActivitiesService: HousekeeperActivitiesService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService,
    private videoService: VideoCaptureService
  ) {}

  ngOnInit(): void {
    const regexp = new RegExp('^[0-9]+$');
    if (this.id == null || !regexp.test(this.id)) {
      this.toastService.warning('La página solicitada no existe. 😥');
      this.router.navigate(['/housekeeper/activities'], {queryParams: { page: 1 }});
    }
  }

  submitForm(){
    const housekeeperPosteriorReport: HousekeeperPosteriorReport = {
      description: this.housekeeperPosteriorReport.get('description')?.value
    };
    let formData: FormData = new FormData();
    const video = this.videoService.getVideo();
    if(video){
      this.videoError = false;
      formData.append("description",housekeeperPosteriorReport.description);
      formData.append("video",video);

      this.housekeeperActivitiesService.housekeeperPosteriorReportCreate(formData,this.id).subscribe(
        resp => {
          this.router.navigate(['/housekeeper/reports'],{queryParams: {id:this.id}});
        }
      )
    }else{
      this.videoError = true;
    }
  }
}
