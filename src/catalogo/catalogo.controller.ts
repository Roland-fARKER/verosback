/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
//import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Catalogo')
@Controller('catalogo')
export class CatalogoController {
  constructor(private readonly catalogoService: CatalogoService) { }

  @ApiOperation({ summary: 'Desarrollado por William Rodriguez' })
  @Post('Enviar')
  create(@Body() createCatalogoDto: CreateCatalogoDto) {
    return this.catalogoService.create(createCatalogoDto);
  }

  @ApiOperation({ summary: 'Desarrollado por William Rodriguez' })
  @Get('Obtener')
  findAll() {
    return this.catalogoService.findAll();
  }

  @ApiOperation({ summary: 'Desarrollado por William Rodriguez' })
  @Get('obtener/:Stock')
  findOne(@Param('Stock') Stock: number) {
    return this.catalogoService.findOne(Stock);
  }

  // @ApiOperation({ summary: 'Desarrollado por William Rodriguez' })
  // @Patch('actualizar/:id_catalogo')
  // update(
  //   @Param('id_catalogo', ParseIntPipe) id_catalogo: number,
  //   @Body() updateCatalogoDto: UpdateCatalogoDto,
  // ) {
  //   return this.catalogoService.update(+id_catalogo, updateCatalogoDto);
  // }

  @ApiOperation({ summary: 'Desarrollado por William Rodriguez' })
  @Delete('Delete/:id_catalogo')
  remove(@Param('id_catalogo') id_catalogo: string) {
    return this.catalogoService.remove(+id_catalogo);
  }
}
