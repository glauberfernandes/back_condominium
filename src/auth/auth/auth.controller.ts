import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginService } from 'src/login/login.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private loginService: LoginService,
  ) {}

  @Post('login')
  async login(@Body() body) {
    const user = await this.authService.login(body.username, body.password);
    return { token: user };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
