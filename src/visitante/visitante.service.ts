import { Injectable } from '@nestjs/common';
import { CreateVisitanteDto } from './dto/create-visitante.dto';
import { UpdateVisitanteDto } from './dto/update-visitante.dto';
import { PrismaService } from 'src/conexao/PrismaService';

@Injectable()
export class VisitanteService {
  constructor(private prisma: PrismaService) { }

  async create(createVisitanteDto: CreateVisitanteDto) {
    let { nomePessoa, documento, empresa, nomePai, nomeMae, email, /*enderecoId,*/  nomeTipo } = createVisitanteDto;
    let novoVisitante = await this.prisma.pessoa.create({
        data: {
          nomePessoa,
          documento,
          empresa,
          nomePai,
          nomeMae,
          email,
          //enderecoId,
          tipoPessoa: {
            create:{
               nomeTipo
            }
          }
        }
      });
      return novoVisitante;
  }

  async findAll() {
    return await this.prisma.pessoa.findMany({
      orderBy: [{
        nomePessoa: 'asc',
      }],
      where: {
        tipoPessoa: {
          nomeTipo: 'visitante'
        }
      }
    
    })
  }

  async findOne(id: number) {
    return await this.prisma.pessoa.findUnique({
      where: {
        idPessoa: id
      }
    });
  }

  async update(id: number, updateVisitanteDto: UpdateVisitanteDto) {
    return await this.prisma.pessoa.update({ where: { idPessoa: id }, data: updateVisitanteDto });
  }

  async remove(id: number) {
    return await this.prisma.pessoa.delete({
      where: {
        idPessoa: id
      }
    });
  }
}
