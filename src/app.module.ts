import { Module } from '@nestjs/common';
import { VisitanteModule } from './visitante/visitante.module';
import { PrismaService } from './conexao/PrismaService';
import { MoradorModule } from './morador/morador.module';
import { PrestadorModule } from './prestador/prestador.module';
import { OcorrenciaModule } from './ocorrencia/ocorrencia.module';
import { TelefoneModule } from './telefone/telefone.module';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { VisitasModule } from './visitas/visitas.module';

@Module({
  imports: [
    VisitanteModule,
    MoradorModule,
    PrestadorModule,
    OcorrenciaModule,
    TelefoneModule,
    AuthModule,
    LoginModule,
    VisitasModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
