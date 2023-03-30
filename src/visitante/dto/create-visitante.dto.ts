import { IsString, IsEmpty, IsInt } from "class-validator";

export class CreateVisitanteDto {

    @IsString()
    @IsEmpty()
    nomePessoa: string;   
    
    @IsString()
    @IsEmpty()
    documento: string;

    @IsString()
    @IsEmpty()
    empresa: string
    
    @IsString()
    @IsEmpty()
    nomePai: string;

    @IsString()
    @IsEmpty()      
    nomeMae:string

    @IsString()
    @IsEmpty()      
    email:string

    @IsInt()
    @IsEmpty()      
    nomeTipo: string

    @IsInt()
    @IsEmpty()      
    enderecoId:number
}
