import { TestBed } from '@angular/core/testing';

import { VuzService } from './vuz.service';

describe('VuzService', () => {
  let service: VuzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VuzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
