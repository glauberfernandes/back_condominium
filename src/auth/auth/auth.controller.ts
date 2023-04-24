import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Role } from '../role.decorator';
import { RoleGuard } from '../role/role.guard';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

@Controller()
export class AuthController {

    constructor(private authService: AuthService){

    }

    @Post('login')
    login(@Body() body){
       return { token: this.authService.login(body.username, body.password) };
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
