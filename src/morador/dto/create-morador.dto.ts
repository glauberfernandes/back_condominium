import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateMoradorDto {
  @IsString()
  @IsNotEmpty()
  nomePessoa: string;

  @IsString()
  @IsNotEmpty()
  documento: string;

  @IsString()
  @IsNotEmpty()
  empresa: string;

  @IsString()
  @IsNotEmpty()
  nomePai: string;

  @IsString()
  @IsNotEmpty()
  nomeMae: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsInt()
  @IsNotEmpty()
  tipoPessoaId: number;

  @IsInt()
  @IsNotEmpty()
  enderecoId: number;
}
