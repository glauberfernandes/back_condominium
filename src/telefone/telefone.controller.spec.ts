import { Test, TestingModule } from '@nestjs/testing';
import { TelefoneController } from './telefone.controller';
import { TelefoneService } from './telefone.service';

describe('TelefoneController', () => {
  let controller: TelefoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TelefoneController],
      providers: [TelefoneService],
    }).compile();

    controller = module.get<TelefoneController>(TelefoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
