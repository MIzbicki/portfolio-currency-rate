import { TestBed } from '@angular/core/testing';

import { MyAllDataServiceService } from './my-all-data-service.service';

describe('MyAllDataServiceService', () => {
  let service: MyAllDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAllDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
