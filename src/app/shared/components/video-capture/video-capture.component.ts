import { Component, OnInit, ViewChild, ElementRef, Renderer2, Output, EventEmitter, OnDestroy } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { scan, takeWhile } from 'rxjs/operators';
declare var MediaRecorder: any;
@Component({
  selector: 'app-video-capture',
  templateUrl: './video-capture.component.html',
  styleUrls: ['./video-capture.component.scss']
})
export class VideoCaptureComponent implements OnInit, OnDestroy {
  @ViewChild('recordedVideo') recordVideoElementRef!: ElementRef;
  @ViewChild('video') videoElementRef!: ElementRef;
  @ViewChild('info') info!: ElementRef;
  @Output() video = new EventEmitter();

  videoElement!: HTMLVideoElement;
  recordVideoElement!: HTMLVideoElement;
  mediaRecorder: any;
  recordedBlobs!: Blob[];
  isRecording: boolean = false;
  downloadUrl!: string;
  stream!: MediaStream;
  timer$!: Observable<number>;
  var: boolean = false;

  videoSaved: boolean = false;
  constructor(private rederer2: Renderer2) { }

  async ngOnInit() {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: {
          width: {
            min: 640,
            ideal: 854,
            max: 1280,
          },
          height: {
            min: 360,
            ideal: 480,
            max: 720
          },
          facingMode: 'environment'
        }
      })
      .then(stream => {
        this.videoElement = this.videoElementRef.nativeElement;
        this.recordVideoElement = this.recordVideoElementRef.nativeElement;

        this.stream = stream;
        this.videoElement.srcObject = this.stream;
      });
  }

  startRecording() {
    this.recordedBlobs = [];
    let options: any = { mimeType: 'video/webm' };

    this.videoElement.classList.remove('d-none');
    const infovc: Element = this.info.nativeElement;
    if (infovc.classList.contains('d-none')) {
      this.rederer2.removeClass(infovc, 'd-none');
      this.rederer2.addClass(infovc, 'd-block');
    }
    this.recordVideoElement.classList.add('d-none');

    try {
      this.mediaRecorder = new MediaRecorder(this.stream, options);
    } catch (err) {
      console.log(err);
    }

    this.mediaRecorder.start();
    this.timer();

    this.isRecording = !this.isRecording;
    this.onDataAvailableEvent();
    this.onStopRecordingEvent();
    this.videoSaved = false;
  }

  stopRecording() {
    this.mediaRecorder.stop();
    this.isRecording = !this.isRecording;
    this.videoElement.classList.add('d-none');
    const infovc: Element = this.info.nativeElement;
    if (infovc.classList.contains('d-block')) {
      this.rederer2.removeClass(infovc, 'd-block');
      this.rederer2.addClass(infovc, 'd-none');
    }
    this.recordVideoElement.classList.remove('d-none');
    console.log('Recorded Blobs: ', this.recordedBlobs);

    this.var = true;
  }

  playRecording() {
    if (!this.recordedBlobs || !this.recordedBlobs.length) {
      console.log('cannot play.');
      return;
    }
    this.recordVideoElement.play();
  }

  onDataAvailableEvent() {
    try {
      this.mediaRecorder.ondataavailable = (event: any) => {
        if (event.data && event.data.size > 0) {
          this.recordedBlobs.push(event.data);
        }
      };
    } catch (error) {
      console.log(error);
    }
  }

  onStopRecordingEvent() {
    try {
      this.mediaRecorder.onstop = (event: Event) => {
        const videoBuffer = new Blob(this.recordedBlobs, {
          type: 'video/webm'
        });
        this.downloadUrl = window.URL.createObjectURL(videoBuffer);
        this.recordVideoElement.src = this.downloadUrl;
        this.videoSaved = true;
        this.video.emit(videoBuffer);
      };
    } catch (error) {
      console.log(error);
    }
  }

  timer() {
    this.timer$ = timer(0, 1000).pipe(
      scan((acc) => --acc, 16),
      takeWhile((x) => {
        if (x <= 0) {
          if(!this.var){
            this.stopRecording();
          }
        }
        return x >= 0;
      })
    )
    this.var = false;
  }

  ngOnDestroy(): void {
    if(this.stream) {
      this.stream.getTracks().forEach(function(track) {
        if (track.readyState == 'live') {
            track.stop();
        }
      });
    }

  }
}
