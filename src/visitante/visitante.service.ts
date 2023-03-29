import { Injectable } from '@nestjs/common';
import { CreateVisitanteDto } from './dto/create-visitante.dto';
import { UpdateVisitanteDto } from './dto/update-visitante.dto';
import { PrismaService } from 'src/conexao/PrismaService';

@Injectable()
export class VisitanteService {
  constructor(private prisma: PrismaService) { }

  async create(createVisitanteDto: CreateVisitanteDto) {
    let { nomePessoa, documento, empresa, nomePai, nomeMae, email, enderecoId, tipoPessoaId } = createVisitanteDto;
    let novoVisitante = await this.prisma.pessoa.create({
        data: {
          nomePessoa,
          documento,
          empresa,
          nomePai,
          nomeMae, 
          email,
          enderecoId,
          tipoPessoaId,
        }
      });
      return novoVisitante;
  }

  findAll() {
    return this.prisma.pessoa.findMany({
      where: {
        tipoPessoaId: 1
      }
    })
  }

  findOne(id: number) {
    return this.prisma.pessoa.findUnique({
      where: {
        idPessoa: id
      }
    });
  }

  update(id: number, updateVisitanteDto: UpdateVisitanteDto) {
    return this.prisma.pessoa.update({ where: { idPessoa: id }, data: updateVisitanteDto });
  }

  remove(id: number) {
    return this.prisma.pessoa.delete({
      where: {
        idPessoa: id
      }
    });
  }
}
