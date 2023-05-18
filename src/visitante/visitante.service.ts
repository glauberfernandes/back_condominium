import { Injectable, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CreateVisitanteDto } from './dto/create-visitante.dto';
import { UpdateVisitanteDto } from './dto/update-visitante.dto';
import { PrismaService } from 'src/conexao/PrismaService';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs'
import * as csv from 'csv-parser';

@Injectable()
export class VisitanteService {
  constructor(private prisma: PrismaService) { }
  //'/home/wesley/Documentos/projetos-pessoais/visitante.csv'

  @UseInterceptors(FileInterceptor('file'))
  async createCSV(@UploadedFile() file) {

    fs.createReadStream(file.path)
      .pipe(csv())
      .on('data', async (data) => { //INFORMAÇÃO QUE VEM DO ARQUIVO CSV
        // Aqui você pode processar cada linha do arquivo CSV

        let { nomePessoa, documento, empresa, nomePai, nomeMae, email, /*enderecoId,*/  nomeTipo } = data;
        let arquivoCSV =  await this.prisma.pessoa.create({
          data: {
            nomePessoa,
            documento,
            empresa,
            nomePai,
            nomeMae,
            email,
            tipoPessoa: {
              create: {
                nomeTipo
              }
            }
          }
        })
      })
      .on('end', () => {
        // Aqui você pode executar ações após processar o arquivo CSV completo
        console.log('Arquivo CSV processado com sucesso.');
        fs.unlinkSync(file.path);
      });

    return { message: 'Arquivo CSV enviado e processamento iniciado.' };
  }

  async create(createVisitanteDto: CreateVisitanteDto) {
    let { nomePessoa, documento, empresa, nomePai, nomeMae, email, /*enderecoId,*/  nomeTipo } = createVisitanteDto;
    let novoVisitante = await this.prisma.pessoa.create({
      data: {
        nomePessoa,
        documento,
        empresa,
        nomePai,
        nomeMae,
        email,
        //enderecoId,
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
