import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Injectable({
  providedIn: 'root'
})
export class VideoCaptureService {

  private video!: Blob;
  private images: WebcamImage[] = [];

  constructor() { }

  sendVideo(data: Blob) {
    this.video = data;
  }

  getVideo() {
    return this.video;
  }

  sendImages(images: WebcamImage[]): void {
    this.images = images;
  }

  getImages() {
    let images: Blob[] = [];
    for (let image of this.images) {
      images.push(this.convertImages(image.imageAsBase64));
    }
    return images;
  }

  convertImages(base64Image: string) {

    const byteCharacters = atob(base64Image);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: 'image/jpeg' });
  }
}
