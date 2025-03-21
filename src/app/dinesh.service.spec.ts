import { TestBed } from '@angular/core/testing';

import { DineshService } from './dinesh.service';

describe('DineshService', () => {
  let service: DineshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DineshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
