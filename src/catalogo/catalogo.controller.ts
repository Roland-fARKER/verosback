import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('catalogo')
@Controller('catalogo')
export class CatalogoController {
  constructor(private readonly catalogoService: CatalogoService) {}

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez'})
  @Post('crear')
  create(@Body() createCatalogoDto: CreateCatalogoDto) {
    return this.catalogoService.create(createCatalogoDto);
  }

  
  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez'})
  @Get('obtener')
  async findAll() {
    const catalogosConProductos = await this.catalogoService.findAllWithProductos();
    return { catalogos: catalogosConProductos };
  }
  
  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez'})
  @Patch('Actualizar/:id')
  update(@Param('id') id: string, @Body() updateCatalogoDto: UpdateCatalogoDto) {
    return this.catalogoService.update(+id, updateCatalogoDto);
  }

  
  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez'})
  @Delete('Delete/:id')
  remove(@Param('id') id: string) {
    return this.catalogoService.remove(+id);
  }
}
