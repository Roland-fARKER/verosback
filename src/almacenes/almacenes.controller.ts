/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlmaceneService } from './almacenes.service';
import { CreateAlmaceneDto } from './dto/create-almacene.dto';
import { UpdateAlmaceneDto } from './dto/update-almacene.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Almacene')
@Controller('almacenes')
export class AlmaceneController {
  constructor(private readonly almacenesService: AlmaceneService) {}

  @ApiOperation({ summary: 'Desarrollado por Josué Bermúdez' })
  @Post('Enviar')
  create(@Body() createAlmaceneDto: CreateAlmaceneDto) {
    return this.almacenesService.create(createAlmaceneDto);
  }

  @ApiOperation({ summary: 'Desarrollado por Josué Bermúdez' })
  @Get('Obtener')
  findAll() {
    return this.almacenesService.findAll();
  }

  @ApiOperation({ summary: 'Desarrollado por Josué Bermúdez' })
  @Get('Obtener/:id')
  findOne(@Param('id') id: string) {
    return this.almacenesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Desarrollado por Josué Bermúdez' })
  @Patch('Actualizar/:id')
  update(
    @Param('id') id: number,
    @Body() updateAlmaceneDto: UpdateAlmaceneDto,
  ) {
    return this.almacenesService.update(id, updateAlmaceneDto);
  }
  @ApiOperation({ summary: 'Desarrollado por Josué Bermúdez' })
  @Delete('Eliminar/:id')
  remove(@Param('id') id: number) {
    return this.almacenesService.remove(id);
  }
}
