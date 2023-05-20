import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  showHover: boolean = false;

  constructor(private service: ServiceService) {}

  
  /**
   * Activates the display of the frame.
   *
   */
  showBorder() {
    this.showHover = true;
  }


  /**
   * Disables the frame display.
   *
   */
  hideBorder() {
    this.showHover = false;
  }


  /**
   * Scrolls to the specified item by ID.
   *
   * @param {string} elementId - The ID of the item to scroll to.
   *
   */
  scrollTo(elementId: string): void {
    this.service.scrollTo(elementId);
  }
}
