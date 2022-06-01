import { Component, OnInit } from '@angular/core';
import { Activity } from '../../../menu/interfaces/activity.interface';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VideoCaptureService } from '../../../menu/services/video-capture.service';
import { HousekeeperActivitiesService } from '../../services/housekeeper-activities.service';
import { HousekeeperPreviousReport } from '../../interfaces/housekeeperPreviousReport.interface';

@Component({
  selector: 'app-housekeeper-previous-report',
  templateUrl: './housekeeper-previous-report.component.html',
  styleUrls: ['./housekeeper-previous-report.component.scss']
})
export class HousekeeperPreviousReportComponent implements OnInit {

  myDate = new Date();
  activities!: Array<Activity>;
  videoError: boolean = false;
  imageError: boolean = false;
  id: string = this.route.snapshot.queryParams['id'];

  housekeeperPreviousReport: FormGroup = this.fb.group({
    description: ['', [Validators.maxLength(100)]],
    dirtLevel: [1]
  });


  constructor(

    private fb: FormBuilder,
    private HousekeeperActivitiesService: HousekeeperActivitiesService,
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

  submitForm() {
    const housekeeperPreviousReport: HousekeeperPreviousReport = {
      description: this.housekeeperPreviousReport.get('description')?.value,
      dirtLevel: this.housekeeperPreviousReport.get('dirtLevel')?.value
    };
    let formData: FormData = new FormData();
    const video = this.videoService.getVideo();
    const images = this.videoService.getImages();
    if(video){
      this.videoError = false;
      if(images.length > 0){
        this.imageError = false;
        formData.append("description", housekeeperPreviousReport.description);
        formData.append("dirtLevel", housekeeperPreviousReport.dirtLevel);
        formData.append("video", video);
        for(let image of images){
          formData.append("images", image);
        }
        this.HousekeeperActivitiesService.housekeeperPreviousReportCreate(formData, this.id).subscribe(
          resp => {
            this.router.navigate(['/housekeeper/reports'],{ queryParams: {id:this.id}});
          }
        )
      }else{
        this.imageError = true;
      }

    }else{
      this.videoError = true;
    }
  }

}
