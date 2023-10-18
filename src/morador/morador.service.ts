import { Injectable } from '@nestjs/common';
import { CreateMoradorDto } from './dto/create-morador.dto';
import { UpdateMoradorDto } from './dto/update-morador.dto';
import { PrismaService } from 'src/conexao/PrismaService';

@Injectable()
export class MoradorService {
  constructor(private prisma: PrismaService) { }

  async create(createMoradorDto: CreateMoradorDto) {
    let { nomePessoa, documento, empresa, nomePai, nomeMae, email, quadra, lote, bloco, apartamento, nomeTipo } = createMoradorDto;
    let novoMorador = await this.prisma.pessoa.create({
      data: {
        nomePessoa,
        documento,
        empresa,
        nomePai,
        nomeMae,
        email,
        Endereco: {
          create: {
            quadra,
            lote,
            bloco,
            apartamento
          }
        },
        tipoPessoa: {
          create: {
            nomeTipo
          }
        }
      }
    });
    return novoMorador;
  }

  totalMoradores() {
    return this.prisma.pessoa.count({
      where: {
        tipoPessoa: {
          nomeTipo: 'morador'
        }
      }
    })
    
  }

  findAll() {
    return this.prisma.pessoa.findMany({
      include: {
        Endereco: true
      },
      orderBy: [{
        nomePessoa: 'asc',
      }],
      where: {
        tipoPessoa: {
          nomeTipo: 'morador'
        }
      }
    })
  }

  findOne(id: number) {
    return this.prisma.pessoa.findUnique({
      include: {
        Endereco: true
      },
      where: {
        idPessoa: id
      }
    });
  }

  update(id: number, updateMoradorDto: UpdateMoradorDto) {
    return this.prisma.pessoa.update({ where: { idPessoa: id }, data: updateMoradorDto });
  }

  remove(id: number) {
    return this.prisma.pessoa.delete({
      where: {
        idPessoa: id
      }
    });
  }
}
