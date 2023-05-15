import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/conexao/PrismaService';
import { UsuarioService } from 'src/usuario/usuario.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'abcd123456',
      signOptions: {
        expiresIn: '60s',
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, UsuarioService, PrismaService, JwtStrategyService]
})
export class AuthModule {}
