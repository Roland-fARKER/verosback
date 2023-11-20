import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateAlmaceneDto 
{
    @ApiProperty()
    @IsString()
    nombre: String;
}
