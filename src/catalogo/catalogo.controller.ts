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
  findAll() {
    return this.catalogoService.findAll();
  }

  
  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez'})
  @Get('obtener/:id')
  findOne(@Param('Nombre_Catalogo') Nombre_Catalogo: string) {
    return this.catalogoService.findOne(Nombre_Catalogo);
  }
}
