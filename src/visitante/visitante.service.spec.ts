import { Test, TestingModule } from '@nestjs/testing';
import { VisitanteService } from './visitante.service';

describe('VisitanteService', () => {
  let service: VisitanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisitanteService],
    }).compile();

    service = module.get<VisitanteService>(VisitanteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
