import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VideoCaptureService } from '../../menu/services/video-capture.service';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-camera-files',
  templateUrl: './camera-files.component.html',
  styleUrls: ['./camera-files.component.scss']
})
export class CameraFilesComponent implements OnInit {

  id: string = this.route.snapshot.queryParams['id'];
  typeReport: string = this.route.snapshot.queryParams['type'];
  constructor(private router: Router, private route: ActivatedRoute,
    private toastService: ToastrService, private videoCaptureService: VideoCaptureService) { }

  ngOnInit(): void {
    const regexp = new RegExp('^[0-9]+$');
    if (this.id == null || !regexp.test(this.id)) {
      this.toastService.warning('La página solicitada no existe. 😥');
      this.router.navigate(['/housekeeper/menu'], {queryParams: { page: 1 }});
    }else{
      this.verifyTypeReport();
    }
  }

  verifyTypeReport(): void{
    if(this.typeReport == 'housekeeper-previous') this.typeReport = 'housekeeper-previous-report';
    else if(this.typeReport == 'housekeeper-posterior') this.typeReport = 'housekeeper-posterior-report';
    else {
      this.toastService.warning('No existe el tipo de reporte. 😥');
      this.router.navigate(['/housekeeper/reports/'], {queryParams: { id: this.id }});
    }
  }

  saveImages(images: WebcamImage[]){
    this.videoCaptureService.sendImages(images);
  }
}
