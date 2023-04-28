import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLegalNoticeComponent } from './footer-legal-notice.component';

describe('FooterLegalNoticeComponent', () => {
  let component: FooterLegalNoticeComponent;
  let fixture: ComponentFixture<FooterLegalNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLegalNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLegalNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
