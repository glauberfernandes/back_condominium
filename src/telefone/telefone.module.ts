import { Module } from '@nestjs/common';
import { TelefoneService } from './telefone.service';
import { TelefoneController } from './telefone.controller';
import { PrismaService } from 'src/conexao/PrismaService';

@Module({
  controllers: [TelefoneController],
  providers: [TelefoneService, PrismaService]
})
export class TelefoneModule {}
