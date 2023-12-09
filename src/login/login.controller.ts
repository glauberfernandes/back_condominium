import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('novoUsuario')
  createNewUser(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.createNewUser(createLoginDto);
  }

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(+id);
  }

  @Get(':nomeUsuario/:senha')
  async findUser(
    @Param('nomeUsuario') nomeUsuario: string,
    @Param('senha') senha: string,
  ) {
    return await this.loginService.findUser(nomeUsuario, senha).catch((e) => {
      console.log('' + e);
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}
