import { Component } from '@angular/core';

@Component({
  selector: 'app-potfolio-join',
  templateUrl: './potfolio-join.component.html',
  styleUrls: ['./potfolio-join.component.scss']
})
export class PotfolioJoinComponent {
  slide: boolean = false;

  showDescription() {
    this.slide = true;
  }

  hideDescription() {
    this.slide = false;
  }

}
