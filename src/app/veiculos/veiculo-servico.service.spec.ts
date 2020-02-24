import { TestBed } from '@angular/core/testing';

import { VeiculoServicoService } from './veiculo-servico.service';

describe('VeiculoServicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeiculoServicoService = TestBed.get(VeiculoServicoService);
    expect(service).toBeTruthy();
  });
});
