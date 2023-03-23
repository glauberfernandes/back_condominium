import { Injectable } from '@nestjs/common';
import { CreateMoradorDto } from './dto/create-morador.dto';
import { UpdateMoradorDto } from './dto/update-morador.dto';
import { PrismaService } from 'src/conexao/PrismaService';

@Injectable()
export class MoradorService {
  constructor( private prisma: PrismaService ){}

  async create(createMoradorDto: CreateMoradorDto) {
    let { nomePessoa, documento, empresa, nomePai, nomeMae, email, tipoPessoaId, enderecoId } = createMoradorDto;
    let novoMorador = await this.prisma.pessoa.create({
      data: {
        nomePessoa,
        documento,
        empresa,
        nomePai,
        nomeMae, 
        email,
        tipoPessoaId,
        enderecoId
      }
    });
    return novoMorador;
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
