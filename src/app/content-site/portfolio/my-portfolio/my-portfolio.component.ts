import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.scss', '../portfolio.component.scss'],
})
export class MyPortfolioComponent {
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
