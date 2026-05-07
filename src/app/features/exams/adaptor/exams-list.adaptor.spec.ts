import { TestBed } from '@angular/core/testing';

import { ExamsListAdaptor } from './exams-list.adaptor';

describe('ExamsListAdaptor', () => {
  let service: ExamsListAdaptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamsListAdaptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
