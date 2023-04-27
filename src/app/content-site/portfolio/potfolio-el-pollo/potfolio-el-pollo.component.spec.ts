import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotfolioElPolloComponent } from './potfolio-el-pollo.component';

describe('PotfolioElPolloComponent', () => {
  let component: PotfolioElPolloComponent;
  let fixture: ComponentFixture<PotfolioElPolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotfolioElPolloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotfolioElPolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
