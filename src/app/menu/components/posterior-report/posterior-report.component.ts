import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PosteriorReport } from '../../interfaces/posteriorReport.interface';
import { ChambermaidActivitiesService } from '../../services/chambermaid-activities.service';
import { Activity } from '../../interfaces/activity.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoCaptureService } from '../../services/video-capture.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-posterior-report',
  templateUrl: './posterior-report.component.html',
  styleUrls: ['./posterior-report.component.scss']
})
export class PosteriorReportComponent implements OnInit {

  myDate = new Date();
  activities!: Array<Activity>;
  videoError: boolean = false;
  imageError: boolean = false;
  id: string = this.route.snapshot.queryParams['id'];

  posteriorReport: FormGroup = this.fb.group({
    description: ['', [Validators.maxLength(100)]],
    dirtyClothes: ['', [Validators.maxLength(100), Validators.required]]
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
      this.router.navigate(['/maid/menu'], {queryParams: { page: 1 }});
    }
  }

  submitForm() {
    const posteriorReport: PosteriorReport = {
      description: this.posteriorReport.get('description')?.value,
      dirtyClothes: this.posteriorReport.get('dirtyClothes')?.value
    };
    let formData: FormData = new FormData();
    const video = this.videoService.getVideo();
    const images = this.videoService.getImages();
    if(video){
      this.videoError = false;
      if(images.length > 0){
        this.imageError = false;
        formData.append("description", posteriorReport.description);
        formData.append("dirtyClothes", posteriorReport.dirtyClothes);
        formData.append("video", video);
        for(let image of images){
          formData.append("images", image);
        }
        this.ChambermaidActivitiesService.posteriorReportCreate(formData, this.id).subscribe(
          resp => {
            this.router.navigate(['/maid/reports'],{ queryParams: {id:this.id}});
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
