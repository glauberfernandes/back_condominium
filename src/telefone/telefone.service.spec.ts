import { Test, TestingModule } from '@nestjs/testing';
import { TelefoneService } from './telefone.service';

describe('TelefoneService', () => {
  let service: TelefoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TelefoneService],
    }).compile();

    service = module.get<TelefoneService>(TelefoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
