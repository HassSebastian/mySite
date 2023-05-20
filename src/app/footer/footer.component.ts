import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private el: ElementRef) {}

  
  /**
   * Called when component life begins.
   *
   */
  ngOnInit() {
    this.el.nativeElement.scrollIntoView();
  }
}
