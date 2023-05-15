import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';
import { Usuario } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private usuarioService: UsuarioService){}

    async validateUser(username: string, password: string): Promise<any> {

      const user = await this.usuarioService.findUser(username);

      if (!user || bcrypt.compareSync(user.senha, password)) {
        throw new UnauthorizedException('Invalid credentials');
      }
      return user;
    }
  
    async login(user: Usuario) {

      const payload = {
        sub: user.idUsuario,
        username: user.nomeUsuario,
        role: user.role,
      };

      const token = await this.jwtService.signAsync(payload);

      return { token };
    }

}
