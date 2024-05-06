import { TestBed } from '@angular/core/testing';

import { TsaksService } from './tsaks.service';

describe('TsaksService', () => {
  let service: TsaksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TsaksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
