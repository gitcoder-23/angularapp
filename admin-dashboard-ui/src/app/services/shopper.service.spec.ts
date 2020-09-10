import { TestBed } from '@angular/core/testing';

import { ShopperService } from './shopper.service';

describe('ShopperService', () => {
  let service: ShopperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
