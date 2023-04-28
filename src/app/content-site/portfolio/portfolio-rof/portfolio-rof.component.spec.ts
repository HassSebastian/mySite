import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioRofComponent } from './portfolio-rof.component';

describe('PortfolioRofComponent', () => {
  let component: PortfolioRofComponent;
  let fixture: ComponentFixture<PortfolioRofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioRofComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioRofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
