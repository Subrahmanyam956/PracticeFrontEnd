import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTemplateComponent } from './cards-template.component';

describe('CardsTemplateComponent', () => {
  let component: CardsTemplateComponent;
  let fixture: ComponentFixture<CardsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
