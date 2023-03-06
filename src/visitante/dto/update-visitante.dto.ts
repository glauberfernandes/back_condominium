import { PartialType } from '@nestjs/mapped-types';
import { CreateVisitanteDto } from './create-visitante.dto';

export class UpdateVisitanteDto extends PartialType(CreateVisitanteDto) {}
