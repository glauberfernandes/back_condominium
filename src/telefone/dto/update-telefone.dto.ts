import { PartialType } from '@nestjs/mapped-types';
import { CreateTelefoneDto } from './create-telefone.dto';
import { IsString, IsEmpty } from "class-validator";

export class UpdateTelefoneDto extends PartialType(CreateTelefoneDto) {
    @IsString()
    @IsEmpty()
    DDD: string
    
    @IsString()
    @IsEmpty()
    numetoTelefone: string
}
