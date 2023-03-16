import { PartialType } from '@nestjs/mapped-types';
import { CreateOcorrenciaDto } from './create-ocorrencia.dto';

export class UpdateOcorrenciaDto extends PartialType(CreateOcorrenciaDto) {}
