import { Module } from '@nestjs/common';
import { VisitanteModule } from './visitante/visitante.module';
import { PrismaService } from './conexao/PrismaService';
import { MoradorModule } from './morador/morador.module';
import { PrestadorModule } from './prestador/prestador.module';
import { OcorrenciaModule } from './ocorrencia/ocorrencia.module';

@Module({
  imports: [VisitanteModule, MoradorModule, PrestadorModule, OcorrenciaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
