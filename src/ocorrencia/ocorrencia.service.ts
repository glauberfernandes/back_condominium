import { Injectable } from '@nestjs/common';
import { CreateOcorrenciaDto } from './dto/create-ocorrencia.dto';
import { UpdateOcorrenciaDto } from './dto/update-ocorrencia.dto';
import { PrismaService } from 'src/conexao/PrismaService';

@Injectable()
export class OcorrenciaService {
  constructor(private prisma: PrismaService) { }

  async create(createOcorrenciaDto: CreateOcorrenciaDto) {
    let { nomePorteiro, descOcorrencia, dataOcorrencia, descTipoOcorrencia, descStatusOcorrencia } = createOcorrenciaDto;
    let novaOcorrencia = await this.prisma.ocorrencia.create({
        data: {
          nomePorteiro,
          descOcorrencia,
          dataOcorrencia,
          tipoOcorrencia: {
            create: {
              descTipoOcorrencia
            }
          },
          statusOcorrencia: {
            create: {
              descStatusOcorrencia
            }
          }
        }
      });
      return novaOcorrencia;
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
