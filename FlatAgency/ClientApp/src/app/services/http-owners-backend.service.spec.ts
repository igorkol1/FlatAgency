import { TestBed, inject } from '@angular/core/testing';

import { HttpOwnersBackendService } from './http-owners-backend.service';

describe('HttpOwnersBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpOwnersBackendService]
    });
  });

  it('should be created', inject([HttpOwnersBackendService], (service: HttpOwnersBackendService) => {
    expect(service).toBeTruthy();
  }));
});
