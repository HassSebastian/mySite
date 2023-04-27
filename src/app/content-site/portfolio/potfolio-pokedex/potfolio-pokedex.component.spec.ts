import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotfolioPokedexComponent } from './potfolio-pokedex.component';

describe('PotfolioPokedexComponent', () => {
  let component: PotfolioPokedexComponent;
  let fixture: ComponentFixture<PotfolioPokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotfolioPokedexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotfolioPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
