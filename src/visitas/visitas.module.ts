import { Module } from '@nestjs/common';
import { VisitasService } from './visitas.services';
import { VisitasController } from './visitas.controller';
import { PrismaService } from 'src/conexao/PrismaService';

@Module({
  controllers: [VisitasController],
  providers: [VisitasService, PrismaService],
})
export class VisitasModule {}
