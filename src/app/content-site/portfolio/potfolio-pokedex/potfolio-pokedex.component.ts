import { Component } from '@angular/core';

@Component({
  selector: 'app-potfolio-pokedex',
  templateUrl: './potfolio-pokedex.component.html',
  styleUrls: ['./potfolio-pokedex.component.scss', '../portfolio.component.scss']
})
export class PotfolioPokedexComponent {
  slide: boolean = false;

  showDescription() {
    this.slide = true;
  }

  hideDescription() {
    this.slide = false;
  }

}
