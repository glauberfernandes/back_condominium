import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateVisitanteDto } from './create-visitante.dto';

export class UpdateVisitanteDto extends PartialType(CreateVisitanteDto) {
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
