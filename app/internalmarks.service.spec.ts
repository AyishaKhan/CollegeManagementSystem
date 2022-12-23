import { TestBed } from '@angular/core/testing';

import { InternalMarksService } from './internalmarks.service';

describe('InternalMarksService', () => {
  let service: InternalMarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalMarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
