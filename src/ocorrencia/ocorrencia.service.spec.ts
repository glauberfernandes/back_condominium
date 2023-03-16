import { Test, TestingModule } from '@nestjs/testing';
import { OcorrenciaService } from './ocorrencia.service';

describe('OcorrenciaService', () => {
  let service: OcorrenciaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OcorrenciaService],
    }).compile();

    service = module.get<OcorrenciaService>(OcorrenciaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
