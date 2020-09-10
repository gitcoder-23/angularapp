import { TestBed } from '@angular/core/testing';

import { RedirectorService } from './auth.redirector.service';

describe('RedirectorService', () => {
  let service: RedirectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
