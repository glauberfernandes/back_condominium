import { Module } from '@nestjs/common';
import { VisitanteModule } from './visitante/visitante.module';
import { PrismaService } from './conexao/PrismaService';

@Module({
  imports: [VisitanteModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
