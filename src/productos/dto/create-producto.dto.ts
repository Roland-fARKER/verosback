/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateProductoDto {
  @ApiProperty()
  @IsString()
  Nombre_Producto: string;

  @ApiProperty()
  @IsString()
  Descripcion: string;

  @ApiProperty()
  @IsBoolean()
  Estado: boolean;

  @ApiProperty()
  @IsNumber()
  Stock: number;

  @ApiProperty()
  @IsNumber()
  Precio_Compra: number;

  @ApiProperty()
  @IsNumber()
  Precio_venta: number;

  @ApiProperty()
  @IsNumber()
  Precio_Unitario: number;

  @ApiProperty()
  @IsNumber()
  Id_Categoria: number;

  @ApiProperty()
  @IsNumber()
  Id_Familia: number;

  @ApiProperty()
  @IsNumber()
  Id_Proveedor: number;
}
