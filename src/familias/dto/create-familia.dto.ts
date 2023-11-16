import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFamiliaDto {
  @ApiProperty()
  @IsString()
  Nombre_familia: string;
}
