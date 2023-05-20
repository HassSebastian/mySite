import { Component } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-responsive-menu',
  templateUrl: './responsive-menu.component.html',
  styleUrls: ['./responsive-menu.component.scss'],
})

export class ResponsiveMenuComponent {
  constructor(private service: ServiceService) {}


  /**
   * Retrieves the value from the service for the responsive menu.
   *
   * @returns {any} - The value obtained from the service for the responsive menu.
   *
   */
  respoMenu() {
    return this.service.getValue();
  }


  /**
   * Scrolls to the specified element using the service.
   *
   * @param {string} elementId - The ID of the element to scroll to.
   *
   */
  scrollTo(elementId: string): void {
    this.service.scrollTo(elementId);
  }
}
