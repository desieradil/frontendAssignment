import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl,SafeResourceUrl  } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  videoURL: string = '';
  iframeURL: SafeUrl;    
  urlData = [];


  @Input() public labels = {
    hdeaderTxt :'Welcome to Video Application',  
    btnTxt: 'Click me!'
  };

  constructor(private sanitizer: DomSanitizer) {
  }

  public getIframeVideoUrl() {

    this.setIFrameURL(this.videoURL);

  }

  setIFrameURL(url: string) {
    if (!url) {
      return '';
    }
    console.log(url);
    this.urlData.push(url);
    let _url = url.replace('watch?v=', 'embed/')
   // let _url = url.replace('watch', 'embed')
    this.iframeURL = this.sanitizer.bypassSecurityTrustResourceUrl(_url);
    console.log(this.iframeURL);
    if (this.urlData.length > 3) {
      this.urlData.shift();
    }
    this.clearInput();
  }
  clearInput() {
    this.videoURL = null;
  }
}
