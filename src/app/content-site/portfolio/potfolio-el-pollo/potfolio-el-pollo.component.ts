import { Component } from '@angular/core';

@Component({
  selector: 'app-potfolio-el-pollo',
  templateUrl: './potfolio-el-pollo.component.html',
  styleUrls: ['./potfolio-el-pollo.component.scss', '../portfolio.component.scss'],
})
export class PotfolioElPolloComponent {
  slide: boolean = false;

  showDescription() {
    this.slide = true;
  }

  hideDescription() {
    window.innerWidth < 880 ? this.slide = true : this.slide = false;
  }
}
