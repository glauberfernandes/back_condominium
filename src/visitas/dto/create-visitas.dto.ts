import { IsString, IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateVisitasDto {
  nomePessoa: string; //ATRIBUTO DA TABELA PESSOA

  @IsString()
  @IsEmpty()
  descDestino: string;

  @IsNotEmpty()
  dhEntrada: Date;

  @IsNotEmpty()
  dhSaida: Date;

  @IsString()
  @IsEmpty()
  apartamento: string;

  @IsString()
  @IsEmpty()
  bloco: string;

  @IsString()
  @IsEmpty()
  lote: string;

  @IsString()
  @IsEmpty()
  quadra: string;
}
