import { Injectable } from '@nestjs/common';
import { CreateOcorrenciaDto } from './dto/create-ocorrencia.dto';
import { UpdateOcorrenciaDto } from './dto/update-ocorrencia.dto';

@Injectable()
export class OcorrenciaService {
  create(createOcorrenciaDto: CreateOcorrenciaDto) {
    return 'This action adds a new ocorrencia';
  }

  findAll() {
    return `This action returns all ocorrencia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ocorrencia`;
  }

  update(id: number, updateOcorrenciaDto: UpdateOcorrenciaDto) {
    return `This action updates a #${id} ocorrencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} ocorrencia`;
  }
}
