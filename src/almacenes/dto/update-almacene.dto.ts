import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAlmaceneDto } from './create-almacene.dto';
import { IsString } from 'class-validator';

export class UpdateAlmaceneDto extends PartialType(CreateAlmaceneDto) {
  @ApiProperty()
  @IsString()
  nombre?: string;
}
