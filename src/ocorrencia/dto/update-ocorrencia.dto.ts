import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from "class-validator";
import { CreateOcorrenciaDto } from './create-ocorrencia.dto';

export class UpdateOcorrenciaDto extends PartialType(CreateOcorrenciaDto) {
    @IsOptional()
    nomePorteiro: string;   
    
    @IsOptional()
    descOcorrencia: string;

    @IsOptional()
    dataOcorrencia: Date;

    @IsOptional()
    descTipoOcorrencia: string;

    @IsOptional()
    descStatusOcorrencia: string;
}
