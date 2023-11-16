import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFamiliaDto } from './create-familia.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateFamiliaDto extends PartialType(CreateFamiliaDto) {
  @ApiProperty()
  @IsString()
  Nombre_familia: string;
}
