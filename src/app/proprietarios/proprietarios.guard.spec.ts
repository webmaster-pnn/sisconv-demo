import { TestBed, async, inject } from '@angular/core/testing';

import { ProprietariosGuard } from './proprietarios.guard';

describe('ProprietariosGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProprietariosGuard]
    });
  });

  it('should ...', inject([ProprietariosGuard], (guard: ProprietariosGuard) => {
    expect(guard).toBeTruthy();
  }));
});
