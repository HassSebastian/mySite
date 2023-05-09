import { Component } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-responsive-menu',
  templateUrl: './responsive-menu.component.html',
  styleUrls: ['./responsive-menu.component.scss'],
})
export class ResponsiveMenuComponent {
  constructor(private service: ServiceService) {}

  respoMenu() {  
    return this.service.getValue();
  }


  scrollTo(elementId: string): void {
    this.service.scrollTo(elementId);
  }

}
