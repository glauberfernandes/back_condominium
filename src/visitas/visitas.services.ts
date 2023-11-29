import { Injectable } from '@nestjs/common';
import { CreateVisitasDto } from './dto/create-visitas.dto';
import { PrismaService } from 'src/conexao/PrismaService';

@Injectable()
export class VisitasService {
  constructor(private prisma: PrismaService) {}

  async create(createVisitasDto: CreateVisitasDto) {
    const {
      descDestino,
      dhEntrada,
      dhSaida,
      apartamento,
      bloco,
      lote,
      quadra,
    } = createVisitasDto;

    const novoDestino = await this.prisma.destino.create({
      data: {
        descDestino,
        dhEntrada,
        dhSaida,
        endereco: {
          create: {
            apartamento,
            bloco,
            lote,
            quadra,
          },
        },
      },
    });

    return novoDestino;
  }

  async findAll() {
    return await this.prisma.destino.findMany({
      include: {
        endereco: true,
      },
    });
  }
}
