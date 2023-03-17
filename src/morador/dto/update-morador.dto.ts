import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateMoradorDto } from './create-morador.dto';

export class UpdateMoradorDto extends PartialType(CreateMoradorDto) {
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
