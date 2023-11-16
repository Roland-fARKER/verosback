import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class CreateCatalogoDto 
{
    @ApiProperty()
    @IsString()
    Nombre_Catalogo:string;

    @ApiProperty()
    @IsString()
    Descripcion:string;
}
