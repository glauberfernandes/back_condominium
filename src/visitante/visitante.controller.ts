import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, Res, UseGuards } from '@nestjs/common';
import { VisitanteService } from './visitante.service';
import { CreateVisitanteDto } from './dto/create-visitante.dto';
import { UpdateVisitanteDto } from './dto/update-visitante.dto';
import { JwtGuard } from 'src/auth/auth/jwt.guard';


@Controller('visitante')
export class VisitanteController {
  constructor(private readonly visitanteService: VisitanteService) { }

  // @Get('pdf')
  // async generatePdf(@Res() res: Response) {
  //   return await this.visitanteService.generatePdf();
  // }

  @Post('upload')
  async uploadFile(@UploadedFile() file) {
    console.log(file);
    return await this.visitanteService.createCSV(file);
  }

  @Post()
  create(@Body() createVisitanteDto: CreateVisitanteDto) {
    return this.visitanteService.create(createVisitanteDto);
  }

  @UseGuards(JwtGuard)
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
