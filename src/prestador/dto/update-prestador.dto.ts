import { PartialType } from '@nestjs/mapped-types';
import { CreatePrestadorDto } from './create-prestador.dto';

export class UpdatePrestadorDto extends PartialType(CreatePrestadorDto) {}
