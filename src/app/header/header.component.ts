import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(public service: ServiceService){}

  ngOnInit(): void {}

  toggleMenu(): void {
    const currentValue = this.service.getValue();
    this.service.setValue(!currentValue);
  }
  selectRespoMenu(){
    return this.service.getValue(); 
  }
}
