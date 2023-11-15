import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Categorias')
@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez'})
  @Post()
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaService.create(createCategoriaDto);
  }

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez'})
  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez'})
  @Get(':id')
  findOne(@Param('Nombre_Categoria') Nombre_categoria: string) {
    return this.categoriaService.findOne(Nombre_categoria);
  }

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaService.remove(+id);
  }
}