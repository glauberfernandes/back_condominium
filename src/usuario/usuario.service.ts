import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/conexao/PrismaService';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) { }

  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

  async findAll() {
    return await this.prisma.usuario.findMany();
  }

  async findUser(nomeUsuario: string, senha: string){
    const user = await this.prisma.usuario.findUnique({
      where: {
        nomeUsuario
      }
    });

    if (!user) {
      console.log('Usuario não encontrado');
    }

    if (!bcrypt.compareSync(senha, user.senha)) {
      throw new Error('Credenciais inválidas');
    }
    return user;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
