import { Component, OnInit } from '@angular/core';
import { VideoCaptureService } from '../../services/video-capture.service';

@Component({
  selector: 'app-video-file',
  templateUrl: './video-file.component.html',
  styleUrls: ['./video-file.component.scss']
})
export class VideoFileComponent implements OnInit {

  MyBlob = new Blob(['test text'], {type : 'text/plain'});

  constructor(private videoCaptureService: VideoCaptureService) { }

  ngOnInit(): void {
  }

  getVideo(dato: any) {
    const data: Blob = dato;
    if(data instanceof Blob){
      this.videoCaptureService.sendVideo(data);
    }
  }
}
