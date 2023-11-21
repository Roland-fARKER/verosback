import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlmacenesService } from './almacenes.service';
import { CreateAlmaceneDto } from './dto/create-almacene.dto';
import { UpdateAlmaceneDto } from './dto/update-almacene.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Almacenes')
@Controller('almacenes')
export class AlmacenesController {
  constructor(private readonly almacenesService: AlmacenesService) {}

  @ApiOperation({summary:'Desarrollado por Josué Bermúdez'})
  @Post('Crear')
  create(@Body() createAlmaceneDto: CreateAlmaceneDto) {
    return this.almacenesService.create(createAlmaceneDto);
  }

  @ApiOperation({summary:'Desarrollado por Josué Bermúdez'})
  @Get('obtener')
  findAll() {
    return this.almacenesService.findAll();
  }

  @ApiOperation({summary:'Desarrollado por Josué Bermúdez'})
  @Get('Obtener/:id')
  findOne(@Param('id') id: string) {
    return this.almacenesService.findOne(+id);
  }

  @ApiOperation({summary:'Desarrollado por Josué Bermúdez'})
  @Patch('Actualizar/:id')
  update(@Param('id') id: string, @Body() updateAlmaceneDto: UpdateAlmaceneDto) {
    return this.almacenesService.update(+id, updateAlmaceneDto);
  }

  @ApiOperation({summary:'Desarrollado por Josué Bermúdez'})
  @Delete('Eliminar/:id')
  remove(@Param('id') id: string) {
    return this.almacenesService.remove(+id);
  }
}
