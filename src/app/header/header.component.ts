import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(public service: ServiceService){}
  showMenu = this.service.showMenu;

  ngOnInit(): void {}

  toggleMenu(): void {
    this.service.toggleMenu();
  }
}
