import { PartialType } from '@nestjs/mapped-types';
import { CreateOcorrenciaDto } from './create-ocorrencia.dto';
import { IsString, IsEmpty, IsInt } from "class-validator";

export class UpdateOcorrenciaDto extends PartialType(CreateOcorrenciaDto) {
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
    tipoOcorrencia: string;

    @IsString()
    @IsEmpty()
    statusOcorrencia: string;
}
