import { Test, TestingModule } from '@nestjs/testing';
import { MoradorService } from './morador.service';

describe('MoradorService', () => {
  let service: MoradorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoradorService],
    }).compile();

    service = module.get<MoradorService>(MoradorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
