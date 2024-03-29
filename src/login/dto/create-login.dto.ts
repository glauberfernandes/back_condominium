import { IsString, IsDateString } from 'class-validator';
export class CreateLoginDto {
  @IsString()
  nomeUsuario: string;

  @IsString()
  senha: string;

  @IsString()
  role: string;

  @IsDateString()
  exp: Date;
}
