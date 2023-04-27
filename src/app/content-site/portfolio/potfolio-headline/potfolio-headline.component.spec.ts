import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotfolioHeadlineComponent } from './potfolio-headline.component';

describe('PotfolioHeadlineComponent', () => {
  let component: PotfolioHeadlineComponent;
  let fixture: ComponentFixture<PotfolioHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotfolioHeadlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotfolioHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
