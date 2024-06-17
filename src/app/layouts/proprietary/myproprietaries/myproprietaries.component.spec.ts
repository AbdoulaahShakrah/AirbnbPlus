import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyproprietariesComponent } from './myproprietaries.component';

describe('MyproprietariesComponent', () => {
  let component: MyproprietariesComponent;
  let fixture: ComponentFixture<MyproprietariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyproprietariesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyproprietariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
