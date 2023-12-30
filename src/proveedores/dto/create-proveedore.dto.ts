/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProveedoreDto {
  @ApiProperty()
  @IsString({ message: 'Nombre debe ser string' })
  @IsNotEmpty({ message: 'Nombre no debe estar vacío' })
  nombre: string;

  @ApiProperty()
  @IsBoolean({ message: 'Estado debe ser boolean' })
  estado: boolean;

  @ApiProperty()
  @IsNumber({}, { message: 'telefono debe ser de tipo numero' })
  telefono: number;
}
