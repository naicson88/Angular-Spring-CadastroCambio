import { TestBed } from '@angular/core/testing';

import { TabelaServiceService } from './tabela-service.service';

describe('TabelaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabelaServiceService = TestBed.get(TabelaServiceService);
    expect(service).toBeTruthy();
  });
});
