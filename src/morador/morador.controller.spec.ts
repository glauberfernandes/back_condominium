import { Test, TestingModule } from '@nestjs/testing';
import { MoradorController } from './morador.controller';
import { MoradorService } from './morador.service';

describe('MoradorController', () => {
  let controller: MoradorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoradorController],
      providers: [MoradorService],
    }).compile();

    controller = module.get<MoradorController>(MoradorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
