/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateCatalogoDto {
  @ApiProperty()
  @IsNumber()
  Stock: number;

  @ApiProperty()
  @IsNumber()
  Id_Producto: number;

  @ApiProperty()
  @IsNumber()
  Id_Almacen: number;
}
