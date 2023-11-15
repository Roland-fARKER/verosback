import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Productos')
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez'})
  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez'})
  @Get()
  findAll() {
    return this.productosService.findAll();
  }

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez'})
  @Get(':Nombre_Producto')
  findOne(@Param('Nombre_Producto') Nombre_Producto: string) {
    return this.productosService.findOne(Nombre_Producto);
  }

  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez'})
  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(+id, updateProductoDto);
  }
 
  @ApiOperation({ summary: 'Desarrollado por Josue Bermudez'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosService.remove(+id);
  }
}
