import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { VisitasService } from './visitas.services';
import { CreateVisitasDto } from './dto/create-visitas.dto';

@Controller('visitas')
export class VisitasController {
  constructor(private readonly visitasService: VisitasService) {}

  @Post()
  create(@Body() createVisitanteDto: CreateVisitasDto) {
    return this.visitasService.create(createVisitanteDto);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.visitasService.findAll(+id);
  }
}
