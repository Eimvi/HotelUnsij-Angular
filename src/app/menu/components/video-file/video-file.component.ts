import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VideoCaptureService } from '../../services/video-capture.service';

@Component({
  selector: 'app-video-file',
  templateUrl: './video-file.component.html',
  styleUrls: ['./video-file.component.scss']
})
export class VideoFileComponent implements OnInit {

  MyBlob = new Blob(['test text'], {type : 'text/plain'});
  id: string = this.route.snapshot.queryParams['id'];
  constructor(private router: Router, private route: ActivatedRoute,
    private toastService: ToastrService, private videoCaptureService: VideoCaptureService) { }

  ngOnInit(): void {
    const regexp = new RegExp('^[0-9]+$');
    if (this.id == null || !regexp.test(this.id)) {
      this.toastService.warning('La página solicitada no existe. 😥');
      this.router.navigate(['/menu/maid'], {queryParams: { page: 1 }});
    }
  }

  getVideo(dato: any) {
    const data: Blob = dato;
    if(data instanceof Blob){
      this.videoCaptureService.sendVideo(data);
    }
  }
}
