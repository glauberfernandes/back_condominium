import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { VisitasService } from './visitas.services';
import { CreateVisitasDto } from './dto/create-visitas.dto';

@Controller('visitas')
export class VisitasController {
  constructor(private readonly visitasService: VisitasService) {}

  @Get()
  findAll() {
    return this.visitasService.findAll();
  }

  @Post()
  create(@Body() createVisitanteDto: CreateVisitasDto) {
    return this.visitasService.create(createVisitanteDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitasService.findOne(+id);
  }
}
