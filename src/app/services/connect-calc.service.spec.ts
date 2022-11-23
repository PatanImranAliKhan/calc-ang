import { TestBed } from '@angular/core/testing';

import { ConnectCalcService } from './connect-calc.service';

describe('ConnectCalcService', () => {
  let service: ConnectCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
