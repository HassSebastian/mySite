import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHeadlineComponent } from './footer-headline.component';

describe('FooterHeadlineComponent', () => {
  let component: FooterHeadlineComponent;
  let fixture: ComponentFixture<FooterHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterHeadlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
