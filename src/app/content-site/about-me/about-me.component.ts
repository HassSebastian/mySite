import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  showHover: boolean = false;

  showBorder() {
    this.showHover = true;
  }
  hideBorder() {
    this.showHover = false;
  }

  constructor(private service: ServiceService) {}

  scrollTo(elementId: string): void {
    this.service.scrollTo(elementId);
  }
}
