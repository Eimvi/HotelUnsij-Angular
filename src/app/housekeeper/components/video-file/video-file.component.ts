import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VideoCaptureService } from '../../../menu/services/video-capture.service';

@Component({
  selector: 'app-video-file',
  templateUrl: './video-file.component.html',
  styleUrls: ['./video-file.component.scss']
})
export class VideoFileComponent implements OnInit {

  MyBlob = new Blob(['test text'], {type : 'text/plain'});
  id: string = this.route.snapshot.queryParams['id'];
  typeReport: string = this.route.snapshot.queryParams['type'];
  constructor(private router: Router, private route: ActivatedRoute,
    private toastService: ToastrService, private videoCaptureService: VideoCaptureService) { }

  ngOnInit(): void {
    const regexp = new RegExp('^[0-9]+$');
    if (this.id == null || !regexp.test(this.id)) {
      this.toastService.warning('La página solicitada no existe. 😥');
      this.router.navigate(['/housekeeper/activities'], {queryParams: { page: 1 }});
    }else{
      this.verifyTypeReport();
    }
  }

  verifyTypeReport(): void{
    if(this.typeReport == 'previous') this.typeReport = 'previous-report';
    else if(this.typeReport == 'posterior') this.typeReport = 'posterior-report';
    else {
      this.toastService.warning('No existe el tipo de reporte. 😥');
      this.router.navigate(['/housekeeper/activities/'], {queryParams: { id: this.id }});
    }
  }

  getVideo(dato: any) {
    const data: Blob = dato;
    if(data instanceof Blob){
      this.videoCaptureService.sendVideo(data);
    }
  }
}
