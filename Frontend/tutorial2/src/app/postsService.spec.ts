import { TestBed } from '@angular/core/testing';

import { Postss } from './postss';

describe('Posts', () => {
  let service: Postss;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Postss);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
