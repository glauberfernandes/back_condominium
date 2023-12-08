import { IsString, IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateVisitasDto {
  nomePessoa: string; //ATRIBUTO DA TABELA PESSOA

  documento: string; //ATRIBUTO DA TABELA PESSOA

  nomeTipo: string; //ATRIBUTO DA TABELA PESSOA

  idTipoPessoa: number;

  @IsString()
  @IsEmpty()
  descDestino: string;

  @IsNotEmpty()
  dhEntrada: Date;

  @IsNotEmpty()
  dhSaida: Date;

  @IsString()
  @IsEmpty()
  apartamento: string; //ATRIBUTO DA TABELA ENDEREÇO

  @IsString()
  @IsEmpty()
  bloco: string; //ATRIBUTO DA TABELA ENDEREÇO

  @IsString()
  @IsEmpty()
  lote: string; //ATRIBUTO DA TABELA ENDEREÇO

  @IsString()
  @IsEmpty()
  quadra: string; //ATRIBUTO DA TABELA ENDEREÇO
}
