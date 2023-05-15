import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Role } from '../role.decorator';
import { RoleGuard } from '../role/role.guard';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';
import { Usuario } from '@prisma/client';

@Controller()
export class AuthController {

    constructor(private authService: AuthService){

    }

    @Post('login')
    async login(@Body() user: Usuario){
        const validateUser = await this.authService.validateUser(user.nomeUsuario, user.senha,); 
       return this.authService.login(validateUser);
    }

    @Role('admin')
    @UseGuards(JwtGuard, RoleGuard)
    @Get('test-auth')
    test(@Req() req){
        console.log(req.user);
        return {
            name: 'Glauber Fernandes'
        }
    }
}
