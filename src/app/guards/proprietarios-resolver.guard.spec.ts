import { TestBed, async, inject } from '@angular/core/testing';

import { ProprietariosResolverGuard } from './proprietarios-resolver.guard';

describe('ProprietariosResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProprietariosResolverGuard]
    });
  });

  it('should ...', inject([ProprietariosResolverGuard], (guard: ProprietariosResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
