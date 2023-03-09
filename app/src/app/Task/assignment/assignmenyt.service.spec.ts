import { TestBed } from '@angular/core/testing';

import { AssignmenytService } from './assignmenyt.service';

describe('AssignmenytService', () => {
  let service: AssignmenytService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmenytService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
