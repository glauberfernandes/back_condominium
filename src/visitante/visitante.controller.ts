import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { VisitanteService } from './visitante.service';
import { CreateVisitanteDto } from './dto/create-visitante.dto';
import { UpdateVisitanteDto } from './dto/update-visitante.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('visitante')
export class VisitanteController {
  constructor(private readonly visitanteService: VisitanteService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    return await this.visitanteService.createCSV(file);
  }

  @Post()
  create(@Body() createVisitanteDto: CreateVisitanteDto) {
    return this.visitanteService.create(createVisitanteDto);
  }

  @Get()
  findAll() {
    return this.visitanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitanteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisitanteDto: UpdateVisitanteDto) {
    return this.visitanteService.update(+id, updateVisitanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visitanteService.remove(+id);
  }
}
