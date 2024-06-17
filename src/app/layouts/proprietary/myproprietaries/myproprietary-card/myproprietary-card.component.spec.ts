import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyproprietaryCardComponent } from './myproprietary-card.component';

describe('MyproprietaryCardComponent', () => {
  let component: MyproprietaryCardComponent;
  let fixture: ComponentFixture<MyproprietaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyproprietaryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyproprietaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
