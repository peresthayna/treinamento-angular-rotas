import { TestBed } from '@angular/core/testing';

import { CursosResolver } from './cursos.resolver';

describe('CursosResolver', () => {
  let resolver: CursosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CursosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
