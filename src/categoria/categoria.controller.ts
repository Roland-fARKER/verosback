/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@ApiTags('Categorias')
@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez' })
  @Post('Enviar')
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaService.create(createCategoriaDto);
  }

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez' })
  @Get('Obtener')
  findAll() {
    return this.categoriaService.findAll();
  }

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez' })
  @Get('obtener/:id')
  findOne(@Param('Nombre_Categoria') Nombre_categoria: string) {
    return this.categoriaService.findOne(Nombre_categoria);
  }

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez' })
  @Patch('actualizar/:id')
  update(
    @Param('id') id: number,
    @Body() updateDto: UpdateCategoriaDto,
  ) {
    return this.categoriaService.update(+id, updateDto);
  }


  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez' })
  @Delete('Delete/:id')
  remove(@Param('id') id: string) {
    return this.categoriaService.remove(+id);
  }
}
