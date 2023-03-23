import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreatePrestadorDto } from './create-prestador.dto';

export class UpdatePrestadorDto extends PartialType(CreatePrestadorDto) {
    @IsOptional()
    nomePessoa: string;   
    
    @IsOptional()
    documento: string;

    @IsOptional()
    empresa: string
    
    @IsOptional()
    nomePai: string;

    @IsOptional()      
    nomeMae:string

    @IsOptional()      
    email:string

    @IsOptional()      
    tipoPessoaId:number

    @IsOptional()      
    enderecoId:number
}
