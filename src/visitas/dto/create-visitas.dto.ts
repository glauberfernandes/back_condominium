import { IsString, IsEmpty } from 'class-validator';

export class CreateVisitasDto {
  @IsString()
  @IsEmpty()
  descDestino: string;

  @IsString()
  @IsEmpty()
  dhEntrada: Date;

  @IsString()
  @IsEmpty()
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
