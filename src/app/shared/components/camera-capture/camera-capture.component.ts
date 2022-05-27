import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import {WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-camera-capture',
  templateUrl: './camera-capture.component.html',
  styleUrls: ['./camera-capture.component.scss']
})
export class CameraCaptureComponent implements OnInit {

  @Output() imagesSend: EventEmitter<WebcamImage[]> = new EventEmitter();

  width!: number;
  height!: number;

  images: WebcamImage[] = [];
  imagesLengthError: boolean = false;
  imagesSaved: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    const win = !!event ? (event.target as Window) : window;
    this.width = win.innerWidth;
    this.height = win.innerHeight;
  }

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  constructor(private toastService: ToastrService) {}

  public ngOnInit(): void {
    this.onResize();
  }

  public triggerSnapshot(): void {
    this.imagesSaved = false;
    this.trigger.next();
  }


  public handleInitError(error: WebcamInitError): void {
    if(error.message == 'Permission denied') this.toastService.error('Permisos de Cámara denegados.');
    else this.toastService.error('Hubo un problema con la cámara.');
  }

  public handleImage(webcamImage: WebcamImage): void {
    if(this.images.length < 5){
      this.images.push(webcamImage);
    }else{
      this.imagesLengthError = true;
    }
  }


  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  deleteImage(i: number): void{
    this.images.splice(i,1);
    this.imagesSaved = false;
    if(this.images.length == 0){
      this.imagesSend.emit(this.images);
    }
  }

  saveImages(): void {
    this.imagesSaved = true;
    this.imagesSend.emit(this.images);
  }

}
