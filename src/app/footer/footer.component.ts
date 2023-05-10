import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  showLegalNotice:boolean = false;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.scrollIntoView();
  }
}
