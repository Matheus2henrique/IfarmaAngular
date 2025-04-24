import { TestBed } from '@angular/core/testing';

import { JuntarService } from './juntar.service';

describe('JuntarService', () => {
  let service: JuntarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuntarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
