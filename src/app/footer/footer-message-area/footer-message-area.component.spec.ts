import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMessageAreaComponent } from './footer-message-area.component';

describe('FooterMessageAreaComponent', () => {
  let component: FooterMessageAreaComponent;
  let fixture: ComponentFixture<FooterMessageAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMessageAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMessageAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
