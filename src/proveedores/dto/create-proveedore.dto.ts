import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsString, isBoolean } from "class-validator";

export class CreateProveedoreDto 
{
    @ApiProperty()
    @IsString()
    Nombre_Proveedor:string;

    @ApiProperty()
    @IsBoolean()
    Estado:boolean;

    @ApiProperty()
    @IsInt()
    Num_Telefono:number;
}
