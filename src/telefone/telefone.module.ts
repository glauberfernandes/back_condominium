import { Module } from '@nestjs/common';
import { TelefoneService } from './telefone.service';
import { TelefoneController } from './telefone.controller';

@Module({
  controllers: [TelefoneController],
  providers: [TelefoneService]
})
export class TelefoneModule {}
