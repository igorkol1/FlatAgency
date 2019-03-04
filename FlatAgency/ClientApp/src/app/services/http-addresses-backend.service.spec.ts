import { TestBed, inject } from '@angular/core/testing';

import { HttpAddressesBackendService } from './http-addresses-backend.service';

describe('HttpAddressesBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpAddressesBackendService]
    });
  });

  it('should be created', inject([HttpAddressesBackendService], (service: HttpAddressesBackendService) => {
    expect(service).toBeTruthy();
  }));
});
