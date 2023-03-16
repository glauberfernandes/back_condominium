import { Module } from '@nestjs/common';
import { PrestadorService } from './prestador.service';
import { PrestadorController } from './prestador.controller';

@Module({
  controllers: [PrestadorController],
  providers: [PrestadorService]
})
export class PrestadorModule {}
