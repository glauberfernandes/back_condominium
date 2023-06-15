import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'process.env.SECRET',
    });
  }

  async validate(nomeUsuario: string, senha: string) {
    const user = await this.authService.validateCredentials(nomeUsuario, senha);
    console.log(user)
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}