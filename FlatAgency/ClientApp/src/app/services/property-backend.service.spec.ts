import { TestBed, inject } from '@angular/core/testing';

import { PropertyBackendService } from './property-backend.service';

describe('PropertyBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyBackendService]
    });
  });

  it('should be created', inject([PropertyBackendService], (service: PropertyBackendService) => {
    expect(service).toBeTruthy();
  }));
});
