import { TestBed, inject } from '@angular/core/testing';

import { HttpPropertiesBackendService } from './http-properties-backend.service';

describe('HttpPropertiesBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpPropertiesBackendService]
    });
  });

  it('should be created', inject([HttpPropertiesBackendService], (service: HttpPropertiesBackendService) => {
    expect(service).toBeTruthy();
  }));
});
