import { Injectable, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CreateVisitanteDto } from './dto/create-visitante.dto';
import { UpdateVisitanteDto } from './dto/update-visitante.dto';
import { PrismaService } from 'src/conexao/PrismaService';
import * as fs from 'fs'
import * as csv from 'csv-parser';

@Injectable()
export class VisitanteService {
  constructor(private prisma: PrismaService) { }

  async createCSV(file: { destination: any; filename: any; }) {
    const filePath = `${file.destination}/${file.filename}`;

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', async (data) => {
          // Processar cada linha do arquivo CSV
          let { nomePessoa, documento, empresa, nomePai, nomeMae, email, nomeTipo } = data;
          await this.prisma.pessoa.create({
            data: {
              nomePessoa,
              documento,
              empresa,
              nomePai,
              nomeMae,
              email,
              tipoPessoa: {
                create: {
                  nomeTipo,
                },
              },
            },
          });
        })
        .on('end', () => {
          // Ações após processar o arquivo CSV completo
          console.log('Arquivo CSV processado com sucesso.');
          fs.unlinkSync(filePath);
          resolve({ message: 'Arquivo CSV enviado e processamento concluído.' });
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  async create(createVisitanteDto: CreateVisitanteDto) {
    let { nomePessoa, documento, empresa, nomePai, nomeMae, email, DDD, numeroTelefone, nomeTipo } = createVisitanteDto;
    let novoVisitante = await this.prisma.pessoa.create({
      data: {
        nomePessoa,
        documento,
        empresa,
        nomePai,
        nomeMae,
        email,
        telefone:{
          create: {
            DDD,
            numeroTelefone
          }
        },
        tipoPessoa: {
          create: {
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
