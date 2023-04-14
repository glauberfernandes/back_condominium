import { Injectable } from '@nestjs/common';
import { CreateTelefoneDto } from './dto/create-telefone.dto';
import { UpdateTelefoneDto } from './dto/update-telefone.dto';
import { PrismaService } from 'src/conexao/PrismaService';

@Injectable()
export class TelefoneService {
  constructor(private prisma: PrismaService){}

  async create(createTelefoneDto: CreateTelefoneDto) {
    let { DDD, numeroTelefone } = createTelefoneDto;

    let novoTelefone = await this.prisma.telefone.create({
      data: {
        DDD,
        numeroTelefone
      }
    })
    return novoTelefone;
  }

  findAll() { //LISTAR APENAS SE O TELEFONE PERTENCER A DETERMINADA PESSOA
    return this.prisma.telefone.findMany()
  }

  findOne(id: number) {
    return this.prisma.telefone.findUnique({
      where:{
        idTelefone: id
      }
    })
  }

  update(id: number, updateTelefoneDto: UpdateTelefoneDto) {
    return this.prisma.telefone.update({ where: { idTelefone: id }, data: updateTelefoneDto });
  }

  remove(id: number) {
    return this.prisma.telefone.delete({
      where:{
        idTelefone: id
      }
    })
  }
}
