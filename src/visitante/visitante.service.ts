import { Injectable } from '@nestjs/common';
import { CreateVisitanteDto } from './dto/create-visitante.dto';
import { UpdateVisitanteDto } from './dto/update-visitante.dto';
import { PrismaService } from 'src/conexao/PrismaService';
//import puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as csv from 'csv-parser';

@Injectable()
export class VisitanteService {
  constructor(private prisma: PrismaService) {}

  // async generatePdf(): Promise<Buffer> {
  //   const browser = await puppeteer.launch();
  //   const page = await browser.newPage();
  //   const data = '<table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Data 1</td><td>Data 2</td></tr></table>';

  //   await page.setContent(`<html><body>${data}</body></html>`);
  //   const pdfBuffer = await page.pdf({ format: 'A4' });

  //   Response.set({
  //     'Content-Type': 'application/pdf',
  //     'Content-Disposition': 'attachment; filename="table.pdf"',
  //     'Content-Length': pdfBuffer.length.toString(),
  //   });

  //   Response.send(pdfBuffer);

  //   await browser.close();

  //   return pdfBuffer;
  // }

  async createCSV(file: { destination: any; filename: any }) {
    const filePath = `${file.destination}/${file.filename}`;

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', async (data) => {
          // Processar cada linha do arquivo CSV
          const {
            nomePessoa,
            documento,
            empresa,
            nomePai,
            nomeMae,
            email,
            DDD,
            numeroTelefone,
            nomeTipo,
          } = data;
          await this.prisma.pessoa.create({
            data: {
              nomePessoa,
              documento,
              empresa,
              nomePai,
              nomeMae,
              email,
              telefone: {
                create: {
                  DDD,
                  numeroTelefone,
                },
              },
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
          resolve({
            message: 'Arquivo CSV enviado e processamento concluído.',
          });
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  async create(createVisitanteDto: CreateVisitanteDto) {
    const {
      nomePessoa,
      documento,
      empresa,
      nomePai,
      nomeMae,
      email,
      DDD,
      numeroTelefone,
      nomeTipo,
    } = createVisitanteDto;

    const novoVisitante = await this.prisma.pessoa.create({
      data: {
        nomePessoa,
        documento,
        empresa,
        nomePai,
        nomeMae,
        email,
        telefone: {
          create: {
            DDD,
            numeroTelefone,
          },
        },
        tipoPessoa: {
          create: {
            nomeTipo,
          },
        },
      },
    });
    return novoVisitante;
  }

  async findAll() {
    return await this.prisma.pessoa.findMany({
      orderBy: [
        {
          nomePessoa: 'asc',
        },
      ],
      where: {
        tipoPessoa: {
          nomeTipo: 'visitante',
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.pessoa.findUnique({
      where: {
        idPessoa: id,
      },
    });
  }

  async update(id: number, updateVisitanteDto: UpdateVisitanteDto) {
    return await this.prisma.pessoa.update({
      where: { idPessoa: id },
      data: updateVisitanteDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.pessoa.delete({
      where: {
        idPessoa: id,
      },
    });
  }
}
