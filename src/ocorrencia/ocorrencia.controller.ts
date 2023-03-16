import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OcorrenciaService } from './ocorrencia.service';
import { CreateOcorrenciaDto } from './dto/create-ocorrencia.dto';
import { UpdateOcorrenciaDto } from './dto/update-ocorrencia.dto';

@Controller('ocorrencia')
export class OcorrenciaController {
  constructor(private readonly ocorrenciaService: OcorrenciaService) {}

  @Post()
  create(@Body() createOcorrenciaDto: CreateOcorrenciaDto) {
    return this.ocorrenciaService.create(createOcorrenciaDto);
  }

  @Get()
  findAll() {
    return this.ocorrenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ocorrenciaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOcorrenciaDto: UpdateOcorrenciaDto) {
    return this.ocorrenciaService.update(+id, updateOcorrenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ocorrenciaService.remove(+id);
  }
}
