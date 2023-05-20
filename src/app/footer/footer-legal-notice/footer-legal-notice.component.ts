import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-footer-legal-notice',
  templateUrl: './footer-legal-notice.component.html',
  styleUrls: ['./footer-legal-notice.component.scss'],
})
export class FooterLegalNoticeComponent {
  showLegalNotice: boolean = false;

  constructor(private service: ServiceService) {}


  /**
   * Scrolls to the specified item ID.
   * @param {string} elementId - The ID of the item to scroll to.
   *
   */
  scrollTo(elementId: string): void {
    this.service.scrollTo(elementId);
  }


  /**
   * Displays the legal notice.
   *
   */
  showLN() {
    this.showLegalNotice = true;
  }

  
  /**
   * Hides the legal notice.
   *
   */
  hideLN() {
    this.showLegalNotice = false;
  }
}
