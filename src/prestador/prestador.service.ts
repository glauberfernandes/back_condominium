import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/conexao/PrismaService';
import { CreatePrestadorDto } from './dto/create-prestador.dto';
import { UpdatePrestadorDto } from './dto/update-prestador.dto';

@Injectable()
export class PrestadorService {
  constructor(private prisma: PrismaService) { }
  
  async create(createPrestadorDto: CreatePrestadorDto) {
    let { nomePessoa, documento, empresa, nomePai, nomeMae, email, tipoPessoaId, enderecoId } = createPrestadorDto;
    let novoPrestador = await this.prisma.pessoa.create({
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
    return novoPrestador;
  }

  findAll() {
    return this.prisma.pessoa.findMany({
      where: {
        tipoPessoaId: 3
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

  update(id: number, updatePrestadorDto: UpdatePrestadorDto) {
    return this.prisma.pessoa.update({ 
      where: { 
        idPessoa: id 
      }, 
      data: updatePrestadorDto 
    });
  }

  remove(id: number) {
    return this.prisma.pessoa.delete({
      where: {
        idPessoa: id
      }
    });
  }
}
