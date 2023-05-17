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
  onWindowResize(event: Event) {
    const screenWidth = window.innerWidth;
    if (screenWidth < 880) {
      this.slide = true;
    } else {
      this.slide = false;
    }
  }

  showDescription() {
    this.slide = true;
  }

  hideDescription() {
    window.innerWidth < 880 ? (this.slide = true) : (this.slide = false);
  }
}
