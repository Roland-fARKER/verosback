import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFamiliaDto } from './create-familia.dto';
import { IsString } from 'class-validator';

export class UpdateFamiliaDto extends PartialType(CreateFamiliaDto) {
  @ApiProperty()
  @IsString()
  Nombre_familia: string;
}
