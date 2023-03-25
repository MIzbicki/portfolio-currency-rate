import { TestBed } from '@angular/core/testing';

import { RatesOnPickedDateService } from './rates-on-picked-date.service';

describe('RatesOnPickedDateService', () => {
  let service: RatesOnPickedDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatesOnPickedDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
