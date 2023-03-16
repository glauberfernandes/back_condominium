import { Module } from '@nestjs/common';
import { OcorrenciaService } from './ocorrencia.service';
import { OcorrenciaController } from './ocorrencia.controller';

@Module({
  controllers: [OcorrenciaController],
  providers: [OcorrenciaService]
})
export class OcorrenciaModule {}
