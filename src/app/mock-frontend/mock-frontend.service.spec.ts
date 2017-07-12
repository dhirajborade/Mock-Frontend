import { TestBed, inject } from '@angular/core/testing';

import { MockFrontendService } from './mock-frontend.service';

describe('MockFrontendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockFrontendService]
    });
  });

  it('should be created', inject([MockFrontendService], (service: MockFrontendService) => {
    expect(service).toBeTruthy();
  }));
});
