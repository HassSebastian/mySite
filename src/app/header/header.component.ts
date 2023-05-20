import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public service: ServiceService) {}

  ngOnInit(): void {}

  
  /**
   * Toggles the menu state by changing the value in the service.
   *
   */
  toggleMenu(): void {
    const currentValue = this.service.getValue();
    this.service.setValue(!currentValue);
  }


  /**
   * Retrieves the value from the service for the responsive menu state.
   *
   * @returns {any} - The value obtained from the service for the responsive menu state.
   *
   */
  turnRespoMenu() {
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
