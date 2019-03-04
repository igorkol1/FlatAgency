import { TestBed, inject } from '@angular/core/testing';

import { OwnersBackendService } from './owners-backend.service';

describe('OwnersBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnersBackendService]
    });
  });

  it('should be created', inject([OwnersBackendService], (service: OwnersBackendService) => {
    expect(service).toBeTruthy();
  }));
});
