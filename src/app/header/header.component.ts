import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          top: 92,
          opacity: 1,
        })
      ),
      state(
        'out',
        style({
          opacity: 0,
        })
      ),
      transition('in => out', animate('300ms')),
      transition('out => in', animate('300ms')),
    ]),
  ],
})
export class HeaderComponent {
  showMenu = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
