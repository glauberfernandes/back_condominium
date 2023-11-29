import { IsString, IsEmpty } from 'class-validator';

export class CreateOcorrenciaDto {
  @IsString()
  @IsEmpty()
  nomePorteiro: string;

  @IsString()
  @IsEmpty()
  descOcorrencia: string;

  @IsString()
  @IsEmpty()
  dataOcorrencia: Date;

  @IsString()
  @IsEmpty()
  descTipoOcorrencia: string;

  @IsString()
  @IsEmpty()
  descStatusOcorrencia: string;
}
