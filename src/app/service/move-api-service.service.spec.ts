import { TestBed } from '@angular/core/testing';

import { MoveApiServiceService } from './move-api-service.service';

describe('MoveApiServiceService', () => {
  let service: MoveApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
