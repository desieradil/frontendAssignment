import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  videoURL: string = '';
  iframeURL: SafeUrl
  trustedDashboardUrl: SafeUrl;
  urlData = [];

  constructor(private sanitizer: DomSanitizer) {
  }

  public getIframeVideoUrl() {

    this.setIFrameURL(this.videoURL);
   
  }

  setIFrameURL(url: string) {
    if (!url) {
      return '';
    }
    this.urlData.push(url);  
    let _url = url.replace('watch', 'embed')
    this.iframeURL = this.sanitizer.bypassSecurityTrustResourceUrl(_url);   
    if(this.urlData.length>3)
    { 
      this.urlData.shift();
    }
    this.clearInput();
  }
  clearInput()
  {
    this.videoURL =null;
  }
}
