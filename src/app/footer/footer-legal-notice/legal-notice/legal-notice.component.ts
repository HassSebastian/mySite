import { Component } from '@angular/core';
import { FooterLegalNoticeComponent } from '../footer-legal-notice.component';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
})
export class LegalNoticeComponent {
  constructor(private fln: FooterLegalNoticeComponent) {}

  
  /**
   * Hides the legal notice footer component.
   *
   */
  hideLN() {
    this.fln.hideLN();
  }
}
