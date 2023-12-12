import { Injectable } from '@nestjs/common';
import { CreateVisitasDto } from './dto/create-visitas.dto';
import { PrismaService } from 'src/conexao/PrismaService';
import * as QRCode from 'qrcode';

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
      nomePessoa,
      documento,
      nomeTipo,
    } = createVisitasDto;

    const dados = await this.prisma.destino.create({
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
        pessoas: {
          create: {
            nomePessoa,
            documento,
            tipoPessoa: {
              create: {
                nomeTipo,
              },
            },
          },
        },
      },
    });

    // Configurações opcionais para o QR code
    const configuracoesQR = {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      quality: 0.92,
      margin: 1,
    };

    // Gera o QR code com os dados obtidos
    const qrCodeData = JSON.stringify(dados);
    const qrCode = await QRCode.toDataURL(qrCodeData, configuracoesQR);

    console.log(qrCode);

    return qrCode;
  }

  async findOne(id: number) {
    return await this.prisma.destino.findMany({
      where: {
        pessoas: {
          idPessoa: id,
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

  async findAll() {
    return await this.prisma.destino.findMany({

    });
  }
}
