import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VideoCaptureService } from '../../../attendant/services/video-capture.service';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-camera-files',
  templateUrl: './camera-files.component.html',
  styleUrls: ['./camera-files.component.scss']
})
export class CameraFilesComponent implements OnInit {

  id: string = this.route.snapshot.queryParams['id'];
  constructor(private router: Router, private route: ActivatedRoute,
    private toastService: ToastrService, private videoCaptureService: VideoCaptureService) { }

  ngOnInit(): void {
    
  }

  saveImages(images: WebcamImage[]){
    this.videoCaptureService.sendImages(images);
  }
}
