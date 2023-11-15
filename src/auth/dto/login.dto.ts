/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsString()
  userName: string;

  @ApiProperty()
  @Transform(({ value })=> value.trim())
  @IsString()
  @MinLength(6)
  password: string;
}