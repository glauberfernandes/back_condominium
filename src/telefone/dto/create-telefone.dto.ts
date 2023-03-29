import { IsString, IsEmpty, IsInt } from "class-validator";

export class CreateTelefoneDto {
    @IsInt()
    @IsEmpty()
    idTelefone: number

    @IsString()
    @IsEmpty()
    numeroTelefone: string
}
