import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoCaptureService {

  private video!: Blob;

  constructor() { }

  sendVideo(data: Blob){
    this.video = data;
  }

  getVideo() {
    return this.video;
  }
}
