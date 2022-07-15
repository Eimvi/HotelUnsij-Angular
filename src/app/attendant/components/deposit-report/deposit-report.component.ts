import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepositReport } from '../../interfaces/depositReport.interface';
import { VideoCaptureService } from '../../../attendant/services/video-capture.service';
import { depositService } from '../../services/deposit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deposit-report',
  templateUrl: './deposit-report.component.html',
  styleUrls: ['./deposit-report.component.scss']
})
export class DepositReportComponent implements OnInit {

  myDate = new Date();
  videoError: boolean = false;
  imageError: boolean = false;
  id: string = this.route.snapshot.queryParams['id'];


  depositReport: FormGroup = this.fb.group({
    observaciones: ['', [Validators.maxLength(100)]]
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private toastService: ToastrService,
    private router: Router,
    private videoService: VideoCaptureService,
    private depositService: depositService) { }

  ngOnInit(): void {
    const regexp = new RegExp('^[0-9]+$');
    if (this.id == null || !regexp.test(this.id)) {
      this.toastService.warning('La página solicitada no existe. 😥');
      this.router.navigate(['/attendant/menu'], {queryParams: { page: 1 }});
    }
  }

  submitForm() {
    console.log("funcion 1")
    const depositReport: DepositReport = {
      observaciones: this.depositReport.get('observaciones')?.value
    };
    let formData: FormData = new FormData();
    const video = this.videoService.getVideo();
    const images = this.videoService.getImages();
    console.log("funcion 2")
    if(video){
      this.videoError = false;
      if(images.length > 0){
        this.imageError = false;
        formData.append("observaciones", depositReport.observaciones);
        formData.append("video", video);
        for(let image of images){
          formData.append("images", image);
        }
        this.depositService.depositReportCreate(formData, this.id).subscribe(
          resp => {
            console.log("IR A SERVICIO")
            //this.router.navigate(['/housekeeper/reports'],{ queryParams: {id:this.id}});
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
