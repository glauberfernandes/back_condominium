import { Test, TestingModule } from '@nestjs/testing';
import { VisitanteController } from './visitante.controller';
import { VisitanteService } from './visitante.service';

describe('VisitanteController', () => {
  let controller: VisitanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisitanteController],
      providers: [VisitanteService],
    }).compile();

    controller = module.get<VisitanteController>(VisitanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
