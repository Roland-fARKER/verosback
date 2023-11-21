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
import { ProveedoresService } from './proveedores.service';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { UpdateProveedoreDto } from './dto/update-proveedore.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Proveedores')
@Controller('proveedores')
export class ProveedoresController {
  constructor(private readonly proveedoresService: ProveedoresService) {}

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez' })
  @Post('Enviar')
  create(@Body() createProveedoreDto: CreateProveedoreDto) {
    const newProveedor = this.proveedoresService.create(createProveedoreDto);
    return newProveedor;
  }

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez' })
  @Get('obtener')
  findAll() {
    return this.proveedoresService.findAll();
  }

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez' })
  @Get('Obtener/:Nombre_Proveedor')
  findOne(@Param('Nombre_Proveedor') Nombre_Proveedor: string) {
    return this.proveedoresService.findOne(Nombre_Proveedor);
  }

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez' })
  @Patch('Actualizar/:id')
  update(
    @Param('id') id: string,
    @Body() updateProveedoreDto: UpdateProveedoreDto,
  ) {
    return this.proveedoresService.update(+id, updateProveedoreDto);
  }

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez' })
  @Delete('Delete/:id')
  remove(@Param('id') id: string) {
    return this.proveedoresService.remove(+id);
  }
}
