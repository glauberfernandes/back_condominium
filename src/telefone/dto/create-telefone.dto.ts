import { IsString, IsEmpty } from "class-validator";

export class CreateTelefoneDto {
    @IsString()
    @IsEmpty()
    DDD: string

    @IsString()
    @IsEmpty()
    numeroTelefone: string
}
