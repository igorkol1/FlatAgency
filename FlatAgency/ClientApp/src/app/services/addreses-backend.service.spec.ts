import { TestBed, inject } from '@angular/core/testing';

import { AddresesBackendService } from './addreses-backend.service';

describe('AddresesBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddresesBackendService]
    });
  });

  it('should be created', inject([AddresesBackendService], (service: AddresesBackendService) => {
    expect(service).toBeTruthy();
  }));
});
