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

  async findAll() {
    let lista = await this.prisma.ocorrencia.findMany({
      select:{
        nomePorteiro: true,
        descOcorrencia: true,
        dataOcorrencia: true,

        tipoOcorrencia:{
          select:{
            descTipoOcorrencia: true
          }
        },

        statusOcorrencia:{
          select:{
            descStatusOcorrencia: true
          }
        }
      },

    });
    return lista
  }

  async findOne(id: number) {
    return await this.prisma.ocorrencia.findUnique({
      where: {
        idOcorrencia: id
      },

      select:{
        nomePorteiro: true,
        descOcorrencia: true,
        dataOcorrencia: true,

        tipoOcorrencia:{
          select:{
            descTipoOcorrencia: true
          }
        },

        statusOcorrencia:{
          select:{
            descStatusOcorrencia: true
          }
        }
      },

    });
  }

  async update(id: number, updateOcorrenciaDto: UpdateOcorrenciaDto) {
    return await this.prisma.ocorrencia.update({ where: { idOcorrencia: id }, data: updateOcorrenciaDto })
  }

  async remove(id: number) {
    return await this.prisma.ocorrencia.delete({
      where: {
        idOcorrencia: id
      }
    });
  }
}
