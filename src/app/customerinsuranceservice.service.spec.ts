import { TestBed } from '@angular/core/testing';

import { CustomerinsuranceserviceService } from './customerinsuranceservice.service';

describe('CustomerinsuranceserviceService', () => {
  let service: CustomerinsuranceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerinsuranceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
