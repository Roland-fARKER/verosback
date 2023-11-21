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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Familias')
@Controller('familias')
export class FamiliasController {
  constructor(private readonly familiasService: FamiliasService) {}

  @ApiOperation({summary:'Desarrollado por Rolando Loaisiga'})
  @Post('Enviar')
  create(@Body() createFamiliaDto: CreateFamiliaDto) {
    return this.familiasService.create(createFamiliaDto);
  }

  @ApiOperation({summary:'Desarrollado por Rolando Loaisiga'})
  @Get('Obtener')
  findAll() {
    return this.familiasService.findAll();
  }

  @ApiOperation({summary:'Desarrollado por Rolando Loaisiga'})
  @Get('Obtener/:id')
  findOne(@Param('id') id: string) {
    return this.familiasService.findOne(+id);
  }

  @ApiOperation({summary:'Desarrollado por Rolando Loaisiga'})
  @Patch('Actualizar/:id')
  update(@Param('id') id: number, @Body() updateFamiliaDto: UpdateFamiliaDto) {
    return this.familiasService.update(id, updateFamiliaDto);
  }

  @Delete('Delete/:id')
  remove(@Param('id') id: number) {
    return this.familiasService.remove(id);
  }
}
