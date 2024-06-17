import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropFooterComponent } from './prop-footer.component';

describe('PropFooterComponent', () => {
  let component: PropFooterComponent;
  let fixture: ComponentFixture<PropFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
