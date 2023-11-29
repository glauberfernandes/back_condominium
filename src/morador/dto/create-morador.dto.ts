import { IsString, IsEmpty, IsInt } from 'class-validator';

export class CreateMoradorDto {
  @IsString()
  @IsEmpty()
  nomePessoa: string;

  @IsString()
  @IsEmpty()
  documento: string;

  @IsString()
  @IsEmpty()
  empresa: string;

  @IsString()
  @IsEmpty()
  nomePai: string;

  @IsString()
  @IsEmpty()
  nomeMae: string;

  @IsString()
  @IsEmpty()
  email: string;

  @IsInt()
  @IsEmpty()
  nomeTipo: string;

  @IsInt()
  @IsEmpty()
  quadra: string;

  @IsInt()
  @IsEmpty()
  lote: string;

  @IsInt()
  @IsEmpty()
  bloco: string;

  @IsInt()
  @IsEmpty()
  apartamento: string;
}
