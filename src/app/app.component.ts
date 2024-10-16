import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private service: ServiceService) {}

  // ngOnInit() {
  //   if (!this.service.isTouchDevice()) {
  //     this.service.touchDisplay = true;
  //   }
  // }
}
