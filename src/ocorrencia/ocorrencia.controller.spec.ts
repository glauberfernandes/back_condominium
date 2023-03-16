import { Test, TestingModule } from '@nestjs/testing';
import { OcorrenciaController } from './ocorrencia.controller';
import { OcorrenciaService } from './ocorrencia.service';

describe('OcorrenciaController', () => {
  let controller: OcorrenciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OcorrenciaController],
      providers: [OcorrenciaService],
    }).compile();

    controller = module.get<OcorrenciaController>(OcorrenciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
