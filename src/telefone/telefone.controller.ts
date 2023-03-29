import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TelefoneService } from './telefone.service';
import { CreateTelefoneDto } from './dto/create-telefone.dto';
import { UpdateTelefoneDto } from './dto/update-telefone.dto';

@Controller('telefone')
export class TelefoneController {
  constructor(private readonly telefoneService: TelefoneService) {}

  @Post()
  create(@Body() createTelefoneDto: CreateTelefoneDto) {
    return this.telefoneService.create(createTelefoneDto);
  }

  @Get()
  findAll() {
    return this.telefoneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.telefoneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTelefoneDto: UpdateTelefoneDto) {
    return this.telefoneService.update(+id, updateTelefoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.telefoneService.remove(+id);
  }
}
