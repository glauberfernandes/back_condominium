import { IsString, IsEmpty, IsInt } from "class-validator";

export class CreateTelefoneDto {
    @IsString()
    @IsEmpty()
    DDD: string

    @IsString()
    @IsEmpty()
    numeroTelefone: string
}
