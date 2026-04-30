import { TestBed } from '@angular/core/testing';

import { DiplomaDetailsAdapter } from './diploma-details.adapter';

describe('DiplomaDetailsAdapter', () => {
  let service: DiplomaDetailsAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiplomaDetailsAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
