/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCategoriaDto 
{
    @ApiProperty()
    @IsString()
    Nombre_Categoria:string;
}
