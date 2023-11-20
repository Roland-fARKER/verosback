import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { FamiliasService } from './familias.service';
import { CreateFamiliaDto } from './dto/create-familia.dto';
import { UpdateFamiliaDto } from './dto/update-familia.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Familias')
@Controller('familias')
export class FamiliasController {
  constructor(private readonly familiasService: FamiliasService) {}

  @Post('Enviar')
  create(@Body() createFamiliaDto: CreateFamiliaDto) {
    return this.familiasService.create(createFamiliaDto);
  }

  @Get('Obtener')
  findAll() {
    return this.familiasService.findAll();
  }

  @Get('Obtener/:id')
  findOne(@Param('id') id: string) {
    return this.familiasService.findOne(+id);
  }

  @Patch('Actualizar/:id')
  update(@Param('id') id: number, @Body() updateFamiliaDto: UpdateFamiliaDto) {
    return this.familiasService.update(id, updateFamiliaDto);
  }

  @Delete('Delete/:id')
  remove(@Param('id') id: number) {
    return this.familiasService.remove(id);
  }
}
