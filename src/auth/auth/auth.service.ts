import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginService } from 'src/login/login.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private loginService: LoginService,
    private jwtService: JwtService,
  ) { }

  async validateCredentials(username: string, password: string) { // Sem problemas
    const user = await this.loginService.findUser(username, password);

    console.log(user)

    if (!user || !bcrypt.compareSync(password, user.senha)) {
      throw new Error('Credenciais inválidas');
    }

    console.log(user)

    return user;
  }

  async login(username: string, password: string) { // Sem problemas
    const user = await this.validateCredentials(username, password);

    console.log(user)
    
    const payload = {
      sub: user.idLogin,
      username: user.nomeUsuario,
      password: user.senha,
      nomeCompleto: user.nomeCompleto
    }
    console.log(payload)
    return this.jwtService.sign(payload)
  }

}