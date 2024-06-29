import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPropertiesComponent } from './myproperties.component';

describe('MyproprietariesComponent', () => {
  let component: MyPropertiesComponent;
  let fixture: ComponentFixture<MyPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyPropertiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
