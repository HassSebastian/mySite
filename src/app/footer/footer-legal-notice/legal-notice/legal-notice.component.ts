import { Component } from '@angular/core';
import { FooterLegalNoticeComponent } from '../footer-legal-notice.component';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
})
export class LegalNoticeComponent {
  email: string = 'sebastian.hass76@gmail.com';

  constructor(
    private fln: FooterLegalNoticeComponent,
    public service: ServiceService
  ) {}

  /**
   * Hides the legal notice footer component.
   *
   */
  hideLN() {
    this.fln.hideLN();
  }
}
