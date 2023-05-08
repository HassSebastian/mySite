import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-rof',
  templateUrl: './portfolio-rof.component.html',
  styleUrls: ['./portfolio-rof.component.scss', '../portfolio.component.scss']
})
export class PortfolioRofComponent {

  slide: boolean = false;

  showDescription() {
    this.slide = true;
  }

  hideDescription() {
    this.slide = false;
  }

  
}
