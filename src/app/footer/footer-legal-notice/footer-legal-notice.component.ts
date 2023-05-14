import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-footer-legal-notice',
  templateUrl: './footer-legal-notice.component.html',
  styleUrls: ['./footer-legal-notice.component.scss'],
})
export class FooterLegalNoticeComponent {
  showLegalNotice:boolean = false;




  constructor(private service: ServiceService) {}

  scrollTo(elementId: string): void {
    this.service.scrollTo(elementId);
  }

  showLN(){
    this.showLegalNotice = true;
  }
  hideLN(){
    this.showLegalNotice = false;
  }
}
