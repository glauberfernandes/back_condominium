import { IsString, IsEmpty } from "class-validator";

export class CreateVisitanteDto {

    @IsString()
    @IsEmpty()
    placa: string;   
    
    @IsString()
    @IsEmpty()
    tipoVeiculo: string;

    @IsString()
    @IsEmpty()
    cor: string
    
    @IsString()
    @IsEmpty()
    modelo: string;

    @IsString()
    @IsEmpty()      
    pessoas:string
}
