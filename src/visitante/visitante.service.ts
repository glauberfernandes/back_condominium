import { Injectable } from '@nestjs/common';
import { CreateVisitanteDto } from './dto/create-visitante.dto';
import { UpdateVisitanteDto } from './dto/update-visitante.dto';
import { PrismaService } from 'src/conexao/PrismaService';

@Injectable()
export class VisitanteService {
  constructor( private prisma: PrismaService ){}

  async create(createVisitanteDto: CreateVisitanteDto) {
    return this.prisma.pessoa.create({
      data: {
        nomePessoa: createVisitanteDto.nomePessoa,
        documento: createVisitanteDto.documento,
        empresa: createVisitanteDto.empresa,
        nomePai: createVisitanteDto.nomePai,
        nomeMae: createVisitanteDto.nomeMae,
        email: createVisitanteDto.email,
        tipoPessoaId: createVisitanteDto.tipoPessoaId,
        enderecoId: createVisitanteDto.enderecoId,
        telefoneID: createVisitanteDto.telefoneId
      }
    });
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
    return this.prisma.pessoa.update({ where: {idPessoa: id}, data: updateVisitanteDto});
  }

  remove(id: number) {
    return this.prisma.pessoa.delete({
      where: {
        idPessoa: id
      }
    });
  }
}
