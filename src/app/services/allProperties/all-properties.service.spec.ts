import { TestBed } from '@angular/core/testing';

import { AllPropertiesService } from './all-properties.service';

describe('AllPropertiesService', () => {
  let service: AllPropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
