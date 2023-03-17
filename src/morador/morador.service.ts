import { Injectable } from '@nestjs/common';
import { CreateMoradorDto } from './dto/create-morador.dto';
import { UpdateMoradorDto } from './dto/update-morador.dto';
import { PrismaService } from 'src/conexao/PrismaService';

@Injectable()
export class MoradorService {
  constructor( private prisma: PrismaService ){}

  create(createMoradorDto: CreateMoradorDto) {
    return this.prisma.pessoa.create({
      data: {
        nomePessoa: createMoradorDto.nomePessoa,
        documento: createMoradorDto.documento,
        empresa: createMoradorDto.empresa,
        nomePai: createMoradorDto.nomePai,
        nomeMae: createMoradorDto.nomeMae,
        email: createMoradorDto.email,
        tipoPessoaId: createMoradorDto.tipoPessoaId,
        enderecoId: createMoradorDto.enderecoId
      }
    });
  }

  findAll() {
    return this.prisma.pessoa.findMany({
      where: {
        tipoPessoaId: 2
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

  update(id: number, updateMoradorDto: UpdateMoradorDto) {
    return this.prisma.pessoa.update({ where: {idPessoa: id}, data: updateMoradorDto});
  }

  remove(id: number) {
    return this.prisma.pessoa.delete({
      where: {
        idPessoa: id
      }
    });
  }
}
