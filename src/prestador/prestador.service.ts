import { Injectable } from '@nestjs/common';
import { CreatePrestadorDto } from './dto/create-prestador.dto';
import { UpdatePrestadorDto } from './dto/update-prestador.dto';

@Injectable()
export class PrestadorService {
  create(createPrestadorDto: CreatePrestadorDto) {
    return 'This action adds a new prestador';
  }

  findAll() {
    return `This action returns all prestador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prestador`;
  }

  update(id: number, updatePrestadorDto: UpdatePrestadorDto) {
    return `This action updates a #${id} prestador`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestador`;
  }
}
