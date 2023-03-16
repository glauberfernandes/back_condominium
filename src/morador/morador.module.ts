import { Module } from '@nestjs/common';
import { MoradorService } from './morador.service';
import { MoradorController } from './morador.controller';
import { PrismaService } from 'src/conexao/PrismaService';

@Module({
  controllers: [MoradorController],
  providers: [MoradorService, PrismaService]
})
export class MoradorModule {}
