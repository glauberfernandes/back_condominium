import { Injectable } from '@nestjs/common';
import { CreateTelefoneDto } from './dto/create-telefone.dto';
import { UpdateTelefoneDto } from './dto/update-telefone.dto';

@Injectable()
export class TelefoneService {
  create(createTelefoneDto: CreateTelefoneDto) {
    return 'This action adds a new telefone';
  }

  findAll() {
    return `This action returns all telefone`;
  }

  findOne(id: number) {
    return `This action returns a #${id} telefone`;
  }

  update(id: number, updateTelefoneDto: UpdateTelefoneDto) {
    return `This action updates a #${id} telefone`;
  }

  remove(id: number) {
    return `This action removes a #${id} telefone`;
  }
}
