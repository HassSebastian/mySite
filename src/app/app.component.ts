import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mySite';

  constructor(private service:ServiceService){}

  test(){
    return this.service.getValue(); 
  }
}
