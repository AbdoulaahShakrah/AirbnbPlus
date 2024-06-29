import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPropertiesCardComponent } from './myproperties-card.component';

describe('MyproprietaryCardComponent', () => {
  let component: MyPropertiesCardComponent;
  let fixture: ComponentFixture<MyPropertiesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyPropertiesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyPropertiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
