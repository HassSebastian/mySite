import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotfolioJoinComponent } from './potfolio-join.component';

describe('PotfolioJoinComponent', () => {
  let component: PotfolioJoinComponent;
  let fixture: ComponentFixture<PotfolioJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotfolioJoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotfolioJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
