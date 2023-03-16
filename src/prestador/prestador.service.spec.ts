import { Test, TestingModule } from '@nestjs/testing';
import { PrestadorService } from './prestador.service';

describe('PrestadorService', () => {
  let service: PrestadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrestadorService],
    }).compile();

    service = module.get<PrestadorService>(PrestadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
