import { Test, TestingModule } from '@nestjs/testing';
import { PrestadorController } from './prestador.controller';
import { PrestadorService } from './prestador.service';

describe('PrestadorController', () => {
  let controller: PrestadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrestadorController],
      providers: [PrestadorService],
    }).compile();

    controller = module.get<PrestadorController>(PrestadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
