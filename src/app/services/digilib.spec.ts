import { TestBed } from '@angular/core/testing';

import { Digilib } from './digilib';

describe('Digilib', () => {
  let service: Digilib;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Digilib);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
