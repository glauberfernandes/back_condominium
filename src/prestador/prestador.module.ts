import { Module } from '@nestjs/common';
import { PrestadorService } from './prestador.service';
import { PrestadorController } from './prestador.controller';
import { PrismaService } from 'src/conexao/PrismaService';

@Module({
  controllers: [PrestadorController],
  providers: [PrestadorService, PrismaService]
})
export class PrestadorModule {}
