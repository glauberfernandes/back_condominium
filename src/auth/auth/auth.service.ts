import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginService } from 'src/login/login.service';
//import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private loginService: LoginService,
    private jwtService: JwtService,
  ) {}

  async validateCredentials(username: string, password: string) {
    const user = await this.loginService.findUser(username, password);

    if (!user) {
      throw new Error('Credenciais inválidas');
    }
    return user;
  }

  async login(username: string, password: string) {
    const user = await this.validateCredentials(username, password);

    const payload = {
      sub: user.idLogin,
      username: user.nomeUsuario,
      password: user.senha,
      type: user.role,
    };
    return this.jwtService.sign(payload);
  }
}
