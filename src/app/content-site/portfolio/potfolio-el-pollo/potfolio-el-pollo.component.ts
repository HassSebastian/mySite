import { Component } from '@angular/core';

@Component({
  selector: 'app-potfolio-el-pollo',
  templateUrl: './potfolio-el-pollo.component.html',
  styleUrls: ['./potfolio-el-pollo.component.scss'],
})
export class PotfolioElPolloComponent {
  slide: boolean = false;

  showDescription() {
    this.slide = true;
  }

  hideDescription() {
    this.slide = false;
  }
}
