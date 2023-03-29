import { PartialType } from '@nestjs/mapped-types';
import { CreateTelefoneDto } from './create-telefone.dto';
import { IsString, IsEmpty, IsInt } from "class-validator";

export class UpdateTelefoneDto extends PartialType(CreateTelefoneDto) {
    @IsInt()
    @IsEmpty()
    idTelefone: number

    @IsString()
    @IsEmpty()
    numetoTelefone: string
}
