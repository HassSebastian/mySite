import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-potfolio-pokedex',
  templateUrl: './potfolio-pokedex.component.html',
  styleUrls: [
    './potfolio-pokedex.component.scss',
    '../portfolio.component.scss',
  ],
})
export class PotfolioPokedexComponent {
  slide: boolean = false;
  @HostListener('window:resize', ['$event'])

  
  /**
   * Handles the "Window Resize" event and adjusts the behavior accordingly.
   * @param {Event} event - The Resize event object.
   *
   */
  onWindowResize(event: Event) {
    const screenWidth = window.innerWidth;
    if (screenWidth < 880) {
      this.slide = true;
    } else {
      this.slide = false;
    }
  }


  /**
   * Activates the display of the description.
   *
   */
  showDescription() {
    this.slide = true;
  }

  
  /**
   * Disables the display of the description.
   *
   */
  hideDescription() {
    window.innerWidth < 880 ? (this.slide = true) : (this.slide = false);
  }
}
