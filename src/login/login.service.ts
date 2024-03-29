import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { PrismaService } from 'src/conexao/PrismaService';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  async createNewUser(createLoginDto: CreateLoginDto) {
    const { nomeUsuario, senha, role, exp } = createLoginDto;
    const saltRounds = 10;
    const hash = bcrypt.hashSync(senha, saltRounds);

    const novoLogin = await this.prisma.login.create({
      data: {
        nomeUsuario,
        senha: hash,
        role,
        exp,
      },
    });

    return novoLogin;
  }

  async findAll() {
    return await this.prisma.login.findMany();
  }

  async findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  async findUser(nomeUsuario: string, senha: string) {
    const user = await this.prisma.login.findFirst({
      where: {
        nomeUsuario,
      },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    /*if (user && user.role !== 'Morador') {
      throw new Error('Acesso não autorizado!');
    }*/

    if (!bcrypt.compareSync(senha, user.senha)) {
      throw new Error('Credenciais inválidas login');
    }

    return user;
  }

  async update(id: number, updateLoginDto: UpdateLoginDto) {
    const { nomeUsuario, senha, role } = updateLoginDto;
    const saltRounds = 10;
    const hash = bcrypt.hashSync(senha, saltRounds);

    const updateLogin = await this.prisma.login.update({
      where: { idLogin: id },
      data: {
        nomeUsuario,
        senha: hash,
        role
      }
    });

    return updateLogin;
  }

  async remove(id: number) {
    return this.prisma.login.delete({
      where: {
        idLogin: id,
      },
    });
  }
}
