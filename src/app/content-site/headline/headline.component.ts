import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent {



constructor(private service: ServiceService){}

scrollTo(elementId: string): void {
this.service.scrollTo(elementId);
}


}
