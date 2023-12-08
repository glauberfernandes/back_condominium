import { Injectable } from '@nestjs/common';
import { CreateVisitasDto } from './dto/create-visitas.dto';
import { PrismaService } from 'src/conexao/PrismaService';

@Injectable()
export class VisitasService {
  constructor(private prisma: PrismaService) {}

  async create(createVisitasDto: CreateVisitasDto) {
    return 'pendente';
  }

  async findAll(idPessoa: number) {
    return await this.prisma.destino.findMany({
      where: {
        pessoas: {
          idPessoa: idPessoa,
        },
      },
      include: {
        pessoas: {
          select: {
            nomePessoa: true,
          },
        },
        endereco: true,
      },
    });
  }
}
