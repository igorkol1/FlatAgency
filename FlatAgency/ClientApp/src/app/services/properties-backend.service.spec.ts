import { TestBed, inject } from '@angular/core/testing';

import { PropertiesBackendService } from './properties-backend.service';

describe('PropertiesBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertiesBackendService]
    });
  });

  it('should be created', inject([PropertiesBackendService], (service: PropertiesBackendService) => {
    expect(service).toBeTruthy();
  }));
});
