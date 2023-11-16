import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { FamiliasService } from './familias.service';
import { CreateFamiliaDto } from './dto/create-familia.dto';
import { UpdateFamiliaDto } from './dto/update-familia.dto';

@Controller('familias')
export class FamiliasController {
  constructor(private readonly familiasService: FamiliasService) {}

  @Post()
  create(@Body() createFamiliaDto: CreateFamiliaDto) {
    return this.familiasService.create(createFamiliaDto);
  }

  @Get()
  findAll() {
    return this.familiasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.familiasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateFamiliaDto: UpdateFamiliaDto) {
    return this.familiasService.update(id, updateFamiliaDto);
  }
}
